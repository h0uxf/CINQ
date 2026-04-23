import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getScreeningSeats } from "../api/seats";
import { createBooking } from "../api/bookings";
import SeatMap from "../components/SeatMap";

export default function Screening() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [loadingBook, setLoadingBook] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["seats", id],
    queryFn: () => getScreeningSeats(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading seats...</div>;
  if (!Array.isArray(data)) return <div>No seat data</div>;

  const seats = data.map((s: any) => ({
    id: s.id,
    rowLabel: s.rowLabel,
    seatNumber: s.seatNumber,
  }));

  const bookedSeatIds = data
    .filter((s: any) => s.isBooked)
    .map((s: any) => s.id);

  const handleBooking = async () => {
    if (!id || selectedSeats.length === 0) return;

    try {
      setLoadingBook(true);

      await createBooking({
        screeningId: Number(id),
        seatIds: selectedSeats,
      });

      setSelectedSeats([]);
      await refetch(); // refresh seat map

      alert("Booking successful!");
    } catch (err: any) {
      alert(err.response?.data?.message || "Booking failed");
    } finally {
      setLoadingBook(false);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Select Seats</h1>

      <SeatMap
        seats={seats}
        bookedSeatIds={bookedSeatIds}
        onChange={setSelectedSeats}
      />

      <button
        onClick={handleBooking}
        disabled={loadingBook || selectedSeats.length === 0}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loadingBook
          ? "Booking..."
          : `Book ${selectedSeats.length} seat(s)`}
      </button>
    </div>
  );
}