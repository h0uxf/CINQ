import type { Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import prisma from "../services/prisma.js";

export const getScreeningsByMovie = async (req: AuthRequest, res: Response) => {
  const { movieId } = req.params;

  const movie = await prisma.movie.findUnique({ where: { id: Number(movieId) } });

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const screenings = await prisma.screening.findMany({
    where: {
      movieId: Number(movieId),
      startTime: { gte: new Date() },
    },
    orderBy: { startTime: "asc" },
    include: { hall: true },
  });

  res.json(screenings);
};

export const getScreeningById = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const screening = await prisma.screening.findUnique({
    where: { id: Number(id) },
    include: { hall: true, movie: true },
  });

  if (!screening) {
    return res.status(404).json({ message: "Screening not found" });
  }

  res.json(screening);
};

export const getScreeningSeats = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const screening = await prisma.screening.findUnique({
    where: { id: Number(id) },
  });

  if (!screening) {
    return res.status(404).json({ message: "Screening not found" });
  }

  const seats = await prisma.seat.findMany({
    where: { hallId: screening.hallId },
    orderBy: [{ rowLabel: "asc" }, { seatNumber: "asc" }],
    include: {
      bookings: {
        where: { booking: { screeningId: Number(id) } },
        select: { id: true },
      },
    },
  });

  const seatsWithAvailability = seats.map(({ bookings, ...seat }) => ({
    ...seat,
    isBooked: bookings.length > 0,
  }));

  res.json(seatsWithAvailability);
};

export const createScreening = async (req: AuthRequest, res: Response) => {
  const { movieId, hallId, startTime, endTime, price } = req.body;

  const movie = await prisma.movie.findUnique({ where: { id: Number(movieId) } });
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const hall = await prisma.hall.findUnique({ where: { id: Number(hallId) } });
  if (!hall) {
    return res.status(404).json({ message: "Hall not found" });
  }

  // Check for overlapping screenings in the same hall
  const conflict = await prisma.screening.findFirst({
    where: {
      hallId: Number(hallId),
      OR: [
        {
          startTime: { lte: new Date(startTime) },
          endTime: { gt: new Date(startTime) },
        },
        {
          startTime: { lt: new Date(endTime) },
          endTime: { gte: new Date(endTime) },
        },
        {
          startTime: { gte: new Date(startTime) },
          endTime: { lte: new Date(endTime) },
        },
      ],
    },
  });

  if (conflict) {
    return res.status(409).json({ message: "Hall is already booked for this time slot" });
  }

  const newScreening = await prisma.screening.create({
    data: {
      movieId: Number(movieId),
      hallId: Number(hallId),
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      price: Number(price),
    },
    include: { movie: true, hall: true },
  });

  res.status(201).json(newScreening);
};

export const updateScreening = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { movieId, hallId, startTime, endTime, price } = req.body;

  const screening = await prisma.screening.findUnique({ where: { id: Number(id) } });
  if (!screening) {
    return res.status(404).json({ message: "Screening not found" });
  }

  const resolvedHallId = hallId ? Number(hallId) : screening.hallId;
  const resolvedStart = startTime ? new Date(startTime) : screening.startTime;
  const resolvedEnd = endTime ? new Date(endTime) : screening.endTime;

  const conflict = await prisma.screening.findFirst({
    where: {
      hallId: resolvedHallId,
      id: { not: Number(id) },
      OR: [
        { startTime: { lte: resolvedStart }, endTime: { gt: resolvedStart } },
        { startTime: { lt: resolvedEnd }, endTime: { gte: resolvedEnd } },
        { startTime: { gte: resolvedStart }, endTime: { lte: resolvedEnd } },
      ],
    },
  });

  if (conflict) {
    return res.status(409).json({ message: "Hall is already booked for this time slot" });
  }

  const updatedScreening = await prisma.screening.update({
    where: { id: Number(id) },
    data: {
      ...(movieId && { movieId: Number(movieId) }),
      ...(hallId && { hallId: Number(hallId) }),
      ...(startTime && { startTime: new Date(startTime) }),
      ...(endTime && { endTime: new Date(endTime) }),
      ...(price && { price: Number(price) }),
    },
    include: { movie: true, hall: true },
  });

  res.json(updatedScreening);
};

export const deleteScreening = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const screening = await prisma.screening.findUnique({ where: { id: Number(id) } });
  if (!screening) {
    return res.status(404).json({ message: "Screening not found" });
  }

  // Hard delete is safe here since Screening has no isActive field
  await prisma.screening.delete({ where: { id: Number(id) } });

  res.status(204).send();
};