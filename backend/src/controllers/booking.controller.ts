import type { Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import prisma from "../services/prisma.js";

export const createBooking = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.userId;
  const { screeningId, seatIds }: { screeningId: number; seatIds: number[] } = req.body;

  const screening = await prisma.screening.findUnique({
    where: { id: Number(screeningId) },
  });

  if (!screening) {
    return res.status(404).json({ message: "Screening not found" });
  }

  if (new Date() > screening.startTime) {
    return res.status(400).json({ message: "Cannot book a screening that has already started" });
  }

  // Validate all seatIds belong to the screening's hall
  const validSeats = await prisma.seat.findMany({
    where: {
      id: { in: seatIds.map(Number) },
      hallId: screening.hallId,
    },
  });

  if (validSeats.length !== seatIds.length) {
    return res.status(400).json({ message: "One or more seats are invalid for this screening" });
  }

  // Check for already booked seats in this screening
  const takenSeats = await prisma.bookingSeat.findMany({
    where: {
      seatId: { in: seatIds.map(Number) },
      booking: { screeningId: Number(screeningId) },
    },
    select: { seatId: true },
  });

  if (takenSeats.length > 0) {
    return res.status(409).json({
      message: "One or more seats are already booked",
      takenSeatIds: takenSeats.map((s) => s.seatId),
    });
  }

  const totalPrice = screening.price * seatIds.length;

  const newBooking = await prisma.booking.create({
    data: {
      userId,
      screeningId: Number(screeningId),
      status: "CONFIRMED",
      seats: {
        create: seatIds.map((seatId: number) => ({ seatId: Number(seatId) })),
      },
    },
    include: {
      screening: { include: { movie: true, hall: true } },
      seats: { include: { seat: true } },
    },
  });

  res.status(201).json({ ...newBooking, totalPrice });
};

export const getMyBookings = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.userId;

  const bookings = await prisma.booking.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      screening: { include: { movie: true, hall: true } },
      seats: { include: { seat: true } },
    },
  });

  res.json(bookings);
};

export const getBookingById = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.user!.userId;
  const userRole = req.user!.role;

  const booking = await prisma.booking.findUnique({
    where: { id: Number(id) },
    include: {
      screening: { include: { movie: true, hall: true } },
      seats: { include: { seat: true } },
    },
  });

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  // Users can only view their own bookings; managers/admins can view any
  if (booking.userId !== userId && !["MANAGER", "ADMIN"].includes(userRole)) {
    return res.status(403).json({ message: "Forbidden" });
  }

  res.json(booking);
};

export const cancelBooking = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.user!.userId;
  const userRole = req.user!.role;

  const booking = await prisma.booking.findUnique({
    where: { id: Number(id) },
    include: { screening: true },
  });

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  if (booking.userId !== userId && !["MANAGER", "ADMIN"].includes(userRole)) {
    return res.status(403).json({ message: "Forbidden" });
  }

  if (booking.status === "CANCELLED") {
    return res.status(400).json({ message: "Booking is already cancelled" });
  }

  if (new Date() > booking.screening.startTime) {
    return res.status(400).json({ message: "Cannot cancel a booking after the screening has started" });
  }

  const cancelledBooking = await prisma.booking.update({
    where: { id: Number(id) },
    data: { status: "CANCELLED" },
    include: {
      screening: { include: { movie: true, hall: true } },
      seats: { include: { seat: true } },
    },
  });

  res.json(cancelledBooking);
};