import { api } from "./client";

export const createBooking = async (data: {
  screeningId: number;
  seatIds: number[];
}) => {
  const res = await api.post("/bookings", data);
  return res.data;
};