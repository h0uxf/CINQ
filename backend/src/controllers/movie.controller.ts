import type { Request, Response } from "express";
import prisma from "../services/prisma.js";

export const getActiveMovies = async (req: Request, res: Response) => {
    const movies = await prisma.movie.findMany({
        where: { isActive: true },
        orderBy: { createdAt: "desc" },
    });

    res.json(movies);
}
export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await prisma.movie.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.json(movies);
};

export const getMovieById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const movie = await prisma.movie.findUnique({
    where: { id: Number(id) },
  });

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }
  res.json(movie);
};

export const createMovie = async (req: Request, res: Response) => {
  const { title, description, durationMinutes, posterUrl } = req.body;

  const newMovie = await prisma.movie.create({
    data: { title, description, durationMinutes, posterUrl },
  });

  res.status(201).json(newMovie);
};

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, durationMinutes, posterUrl } = req.body;
  const updatedMovie = await prisma.movie.update({
    where: { id: Number(id) },
    data: { title, description, durationMinutes, posterUrl },
  });

  res.json(updatedMovie);
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    await prisma.movie.update({
        where: { id: Number(id) },
        data: { isActive: false },
    });

    res.status(204).send();
};


