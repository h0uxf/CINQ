import type { Response } from "express";
import prisma from "../services/prisma.js";
import type { AuthRequest } from "../middlewares/auth.middleware.js";

export const getMyProfile = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.userId;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      bookings: {
        orderBy: { createdAt: "desc" },
        include: {
          screening: {
            include: {
              movie: true,
              hall: true,
            },
          },
          seats: {
            include: {
              seat: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};