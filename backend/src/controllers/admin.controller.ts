import type { Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import prisma from "../services/prisma.js";

export const getStats = async (req: AuthRequest, res: Response) => {
  const now = new Date();
  const [totalMovies, activeMovies, halls, upcomingScreenings, totalBookings, confirmedBookings, totalUsers] =
    await Promise.all([
      prisma.movie.count(),
      prisma.movie.count({ where: { isActive: true } }),
      prisma.hall.count(),
      prisma.screening.count({ where: { startTime: { gte: now } } }),
      prisma.booking.count(),
      prisma.booking.count({ where: { status: "CONFIRMED" } }),
      prisma.user.count(),
    ]);

  const revenueData = await prisma.booking.findMany({
    where: { status: "CONFIRMED" },
    include: { seats: true, screening: { select: { price: true } } },
  });
  const revenue = revenueData.reduce(
    (acc: number, b) => acc + b.seats.length * b.screening.price,
    0
  );

  res.json({ totalMovies, activeMovies, halls, upcomingScreenings, totalBookings, confirmedBookings, totalUsers, revenue });
};

// ── Users ──────────────────────────────────────────────────

export const getAllUsers = async (req: AuthRequest, res: Response) => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true, username: true, firstName: true, lastName: true,
      email: true, role: true, isActive: true, createdAt: true,
      _count: { select: { bookings: true } },
    },
  });
  res.json(users);
};

export const updateUserRole = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { role } = req.body;
  if (!["USER", "MANAGER", "ADMIN"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { role },
    select: { id: true, username: true, email: true, role: true, isActive: true },
  });
  res.json(user);
};

export const toggleUserActive = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (Number(id) === req.user!.userId) {
    return res.status(400).json({ message: "Cannot deactivate your own account" });
  }
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  if (!user) return res.status(404).json({ message: "User not found" });

  const updated = await prisma.user.update({
    where: { id: Number(id) },
    data: { isActive: !user.isActive },
    select: { id: true, email: true, isActive: true, role: true },
  });
  res.json(updated);
};

export const deleteUser = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (Number(id) === req.user!.userId) {
    return res.status(400).json({ message: "Cannot delete your own account" });
  }
  await prisma.user.delete({ where: { id: Number(id) } });
  res.status(204).send();
};

// ── Bookings ───────────────────────────────────────────────

export const getAllBookings = async (req: AuthRequest, res: Response) => {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { id: true, email: true, firstName: true, lastName: true } },
      screening: { include: { movie: true, hall: true } },
      seats: { include: { seat: true } },
    },
  });
  res.json(bookings);
};

export const updateBookingStatus = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!["PENDING", "CONFIRMED", "CANCELLED", "EXPIRED"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }
  const booking = await prisma.booking.update({
    where: { id: Number(id) },
    data: { status },
    include: {
      user: { select: { id: true, email: true } },
      screening: { include: { movie: true, hall: true } },
      seats: { include: { seat: true } },
    },
  });
  res.json(booking);
};

// ── Screenings ─────────────────────────────────────────────

export const getAllScreenings = async (req: AuthRequest, res: Response) => {
  const screenings = await prisma.screening.findMany({
    orderBy: { startTime: "desc" },
    include: { movie: true, hall: true },
  });
  res.json(screenings);
};

// ── Genres ────────────────────────────────────────────────

export const getGenres = async (req: AuthRequest, res: Response) => {
  const genres = await prisma.genre.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { movies: true } } },
  });
  res.json(genres);
};

export const createGenre = async (req: AuthRequest, res: Response) => {
  const { name } = req.body;
  if (!name?.trim()) return res.status(400).json({ message: "Genre name is required" });
  try {
    const genre = await prisma.genre.create({
      data: { name: name.trim() },
      include: { _count: { select: { movies: true } } },
    });
    res.status(201).json(genre);
  } catch {
    res.status(409).json({ message: "Genre already exists" });
  }
};

export const updateGenre = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name?.trim()) return res.status(400).json({ message: "Genre name is required" });
  try {
    const genre = await prisma.genre.update({
      where: { id: Number(id) },
      data: { name: name.trim() },
      include: { _count: { select: { movies: true } } },
    });
    res.json(genre);
  } catch {
    res.status(409).json({ message: "Genre name already taken" });
  }
};

export const deleteGenre = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.genre.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
