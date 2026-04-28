import type { Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import prisma from "../services/prisma.js";

const MOVIE_INCLUDE = { genres: true };

export const getActiveMovies = async (req: AuthRequest, res: Response) => {
  const movies = await prisma.movie.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
    include: MOVIE_INCLUDE,
  });
  res.json(movies);
};

export const getAllMovies = async (req: AuthRequest, res: Response) => {
  const movies = await prisma.movie.findMany({
    orderBy: { createdAt: "desc" },
    include: MOVIE_INCLUDE,
  });
  res.json(movies);
};

export const getMovieById = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const movie = await prisma.movie.findUnique({
    where: { id: Number(id) },
    include: {
      genres: true,
      screenings: {
        where: { startTime: { gte: new Date() } },
        orderBy: { startTime: "asc" },
        include: { hall: true },
      },
    },
  });
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
};

export const createMovie = async (req: AuthRequest, res: Response) => {
  const { title, description, durationMinutes, posterUrl, trailerUrl, genreIds } = req.body;

  const newMovie = await prisma.movie.create({
    data: {
      title,
      description,
      durationMinutes,
      posterUrl: posterUrl || undefined,
      trailerUrl: trailerUrl || undefined,
      ...(genreIds?.length && {
        genres: { connect: (genreIds as number[]).map((id) => ({ id })) },
      }),
    },
    include: MOVIE_INCLUDE,
  });
  res.status(201).json(newMovie);
};

export const updateMovie = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, description, durationMinutes, posterUrl, trailerUrl, isActive, genreIds } = req.body;

  const movie = await prisma.movie.findUnique({ where: { id: Number(id) } });
  if (!movie) return res.status(404).json({ message: "Movie not found" });

  const updatedMovie = await prisma.movie.update({
    where: { id: Number(id) },
    data: {
      ...(title !== undefined && { title }),
      ...(description !== undefined && { description }),
      ...(durationMinutes !== undefined && { durationMinutes }),
      ...(posterUrl !== undefined && { posterUrl: posterUrl || null }),
      ...(trailerUrl !== undefined && { trailerUrl: trailerUrl || null }),
      ...(isActive !== undefined && { isActive }),
      ...(genreIds !== undefined && {
        genres: { set: (genreIds as number[]).map((gid) => ({ id: gid })) },
      }),
    },
    include: MOVIE_INCLUDE,
  });
  res.json(updatedMovie);
};

export const deleteMovie = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const movie = await prisma.movie.findUnique({ where: { id: Number(id) } });
  if (!movie) return res.status(404).json({ message: "Movie not found" });

  await prisma.movie.update({
    where: { id: Number(id) },
    data: { isActive: false },
  });
  res.status(204).send();
};
