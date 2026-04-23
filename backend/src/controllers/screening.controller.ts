import type { Request, Response } from "express";
import prisma from "../services/prisma.js";

export const getScreeningsByMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  const screenings = await prisma.screening.findMany({
    where: { movieId: Number(movieId), isActive: true },
    orderBy: { startTime: "asc" },
    include: { hall: true },
  });

  res.json(screenings);
};

export const getScreeningById = async (req: Request, res: Response) => {
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

export const getScreeningSeats = async (req: Request, res: Response) => {
  const { id } = req.params;

  const screening = await prisma.screening.findUnique({
    where: { id: Number(id) },
  });

  if (!screening) {
    return res.status(404).json({ message: "Screening not found" });
  }

  const seats = await prisma.seat.findMany({
    where: { hallId: screening.hallId },
    include: {
      bookingSeats: {
        where: { booking: { screeningId: Number(id) } },
        select: { id: true },
      },
    },
  });

  const seatsWithAvailability = seats.map((seat) => ({
    ...seat,
    isBooked: seat.bookingSeats.length > 0,
  }));

  res.json(seatsWithAvailability);
};

export const createScreening = async (req: Request, res: Response) => {
  const { movieId, hallId, startTime, price } = req.body;

  const newScreening = await prisma.screening.create({
    data: {
      movieId: Number(movieId),
      hallId: Number(hallId),
      startTime: new Date(startTime),
      price: Number(price),
    },
  });

  res.status(201).json(newScreening);
};

export const updateScreening = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { movieId, hallId, startTime, price } = req.body;

  const updatedScreening = await prisma.screening.update({
    where: { id: Number(id) },
    data: {
      ...(movieId && { movieId: Number(movieId) }),
      ...(hallId && { hallId: Number(hallId) }),
      ...(startTime && { startTime: new Date(startTime) }),
      ...(price && { price: Number(price) }),
    },
  });

  res.json(updatedScreening);
};

export const deleteScreening = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prisma.screening.update({
    where: { id: Number(id) },
    data: { isActive: false },
  });

  res.status(204).send();
};