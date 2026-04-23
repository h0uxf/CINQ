import { api } from "./client";

export const getScreeningSeats = async (screeningId: string) => {
  const res = await api.get(`/screenings/${screeningId}/seats`);
  return res.data;
};