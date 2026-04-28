import type { Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import prisma from "../services/prisma.js";

export const getAllHalls = async (req: AuthRequest, res: Response) => {
  const halls = await prisma.hall.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: { select: { seats: true, screenings: true } },
    },
  });
  res.json(halls);
};

export const getHallById = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const hall = await prisma.hall.findUnique({
    where: { id: Number(id) },
    include: {
      seats: { orderBy: [{ rowLabel: "asc" }, { seatNumber: "asc" }] },
    },
  });
  if (!hall) return res.status(404).json({ message: "Hall not found" });
  res.json(hall);
};

function buildSeats(rows: string[], seatsPerRow: number) {
  return rows.flatMap((rowLabel) =>
    Array.from({ length: seatsPerRow }, (_, i) => ({
      rowLabel,
      seatNumber: i + 1,
    }))
  );
}

export const createHall = async (req: AuthRequest, res: Response) => {
  const { name, rows, seatsPerRow, seats } = req.body;
  if (!name) return res.status(400).json({ message: "Hall name is required" });

  let seatsData: Array<{ rowLabel: string; seatNumber: number }> = [];
  if (rows?.length && seatsPerRow) {
    seatsData = buildSeats(rows as string[], Number(seatsPerRow));
  } else if (seats?.length) {
    seatsData = seats;
  }

  const newHall = await prisma.hall.create({
    data: {
      name,
      ...(seatsData.length && { seats: { create: seatsData } }),
    },
    include: {
      seats: { orderBy: [{ rowLabel: "asc" }, { seatNumber: "asc" }] },
      _count: { select: { seats: true } },
    },
  });
  res.status(201).json(newHall);
};

export const updateHall = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name, rows, seatsPerRow } = req.body;

  const hall = await prisma.hall.findUnique({ where: { id: Number(id) } });
  if (!hall) return res.status(404).json({ message: "Hall not found" });

  if (rows?.length && seatsPerRow) {
    // Block if there are active bookings for seats in this hall
    const activeBookings = await prisma.booking.count({
      where: {
        status: { in: ["CONFIRMED", "PENDING"] },
        seats: { some: { seat: { hallId: Number(id) } } },
      },
    });

    if (activeBookings > 0) {
      return res.status(400).json({
        message: `Cannot reconfigure seats: ${activeBookings} active booking(s) exist for this hall. Cancel them first.`,
      });
    }

    // Remove old booking-seat links (from cancelled/expired bookings) then seats
    await prisma.bookingSeat.deleteMany({
      where: { seat: { hallId: Number(id) } },
    });
    await prisma.seat.deleteMany({ where: { hallId: Number(id) } });

    const seatsData = buildSeats(rows as string[], Number(seatsPerRow));
    await prisma.seat.createMany({
      data: seatsData.map((s) => ({ ...s, hallId: Number(id) })),
    });
  }

  const updatedHall = await prisma.hall.update({
    where: { id: Number(id) },
    data: { ...(name && { name }) },
    include: {
      seats: { orderBy: [{ rowLabel: "asc" }, { seatNumber: "asc" }] },
      _count: { select: { seats: true } },
    },
  });
  res.json(updatedHall);
};

export const deleteHall = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const upcoming = await prisma.screening.count({
    where: { hallId: Number(id), startTime: { gte: new Date() } },
  });
  if (upcoming > 0) {
    return res.status(400).json({
      message: "Cannot delete a hall with upcoming screenings",
    });
  }
  await prisma.hall.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
