import type { Request, Response } from "express";
import prisma from "../services/prisma.js";

export const getAllHalls = async (req: Request, res: Response) => {
  const halls = await prisma.hall.findMany({
    orderBy: { name: "asc" },
  });

  res.json(halls);
};

export const getHallById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const hall = await prisma.hall.findUnique({
    where: { id: Number(id) },
    include: { seats: true },
  });

  if (!hall) {
    return res.status(404).json({ message: "Hall not found" });
  }

  res.json(hall);
};

export const createHall = async (req: Request, res: Response) => {
  const { name, totalSeats } = req.body;

  const newHall = await prisma.hall.create({
    data: { name, totalSeats: Number(totalSeats) },
  });

  res.status(201).json(newHall);
};