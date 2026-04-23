import type { Request, Response } from "express";
import prisma from "../services/prisma.js";
import type { AuthRequest } from "../middlewares/auth.middleware.js";

export const createBooking = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.userId;
  const { screeningId, seatIds } = req.body;

  // Verify all requested seats are not already booked for this screening
  const conflictingSeats = await prisma.bookingSeat.findMany({
    where: {
      seatId: { in: seatIds.map(Number) },
      booking: { screeningId: Number(screeningId) },
    },
  });

  if (conflictingSeats.length > 0) {
    return res.status(409).json({ message: "One or more seats are already booked" });
  }

  const screening = await prisma.screening.findUnique({
    where: { id: Number(screeningId) },
    select: { price: true },
  });

  if (!screening) {
    return res.status(404).json({ message: "Screening not found" });
  }

  const totalPrice = screening.price * seatIds.length;

  const newBooking = await prisma.booking.create({
    data: {
      userId: Number(userId),
      screeningId: Number(screeningId),
      totalPrice,
      bookingSeats: {
        create: seatIds.map((seatId: number) => ({ seatId: Number(seatId) })),
      },
    },
    include: { bookingSeats: true },
  });

  res.status(201).json(newBooking);
};

export const getMyBookings = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.userId;

  const bookings = await prisma.booking.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      screening: { include: { movie: true, hall: true } },
      bookingSeats: { include: { seat: true } },
    },
  });

  res.json(bookings);
};

export const getBookingById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const booking = await prisma.booking.findUnique({
    where: { id: Number(id) },
    include: {
      screening: { include: { movie: true, hall: true } },
      bookingSeats: { include: { seat: true } },
    },
  });

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  res.json(booking);
};

export const cancelBooking = async (req: Request, res: Response) => {
  const { id } = req.params;

  const booking = await prisma.booking.findUnique({
    where: { id: Number(id) },
  });

  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  if (booking.status === "CANCELLED") {
    return res.status(400).json({ message: "Booking is already cancelled" });
  }

  const updatedBooking = await prisma.booking.update({
    where: { id: Number(id) },
    data: { status: "CANCELLED" },
  });

  res.json(updatedBooking);
};