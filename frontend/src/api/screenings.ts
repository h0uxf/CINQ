import { api } from "./client";

export const getScreeningsByMovie = async (movieId: string) => {
  const res = await api.get(`/screenings/movie/${movieId}`);
  return res.data;
};