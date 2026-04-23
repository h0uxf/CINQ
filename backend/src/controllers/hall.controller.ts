import type { Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import prisma from "../services/prisma.js";

export const getAllHalls = async (req: AuthRequest, res: Response) => {
  const halls = await prisma.hall.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { seats: true } } },
  });

  res.json(halls);
};

export const getHallById = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const hall = await prisma.hall.findUnique({
    where: { id: Number(id) },
    include: {
      seats: {
        orderBy: [{ rowLabel: "asc" }, { seatNumber: "asc" }],
      },
    },
  });

  if (!hall) {
    return res.status(404).json({ message: "Hall not found" });
  }

  res.json(hall);
};

export const createHall = async (req: AuthRequest, res: Response) => {
  const { name, seats } = req.body;
  // seats: Array<{ rowLabel: string; seatNumber: number }>

  if (!name) {
    return res.status(400).json({ message: "Hall name is required" });
  }

  const newHall = await prisma.hall.create({
    data: {
      name,
      ...(seats?.length && {
        seats: {
          create: seats.map((s: { rowLabel: string; seatNumber: number }) => ({
            rowLabel: s.rowLabel,
            seatNumber: s.seatNumber,
          })),
        },
      }),
    },
    include: {
      seats: { orderBy: [{ rowLabel: "asc" }, { seatNumber: "asc" }] },
    },
  });

  res.status(201).json(newHall);
};