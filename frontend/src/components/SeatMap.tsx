import { useState } from "react";

type Seat = {
  id: number;
  rowLabel: string;
  seatNumber: number;
};

type Props = {
  seats: Seat[];
  bookedSeatIds: number[];
  onChange?: (selected: number[]) => void;
};

export default function SeatMap({ seats, bookedSeatIds, onChange }: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSeat = (seatId: number) => {
    if (bookedSeatIds.includes(seatId)) return;

    let updated: number[];

    if (selected.includes(seatId)) {
      updated = selected.filter((id) => id !== seatId);
    } else {
      updated = [...selected, seatId];
    }

    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="grid grid-cols-8 gap-2">
      {seats.map((seat) => {
        const isBooked = bookedSeatIds.includes(seat.id);
        const isSelected = selected.includes(seat.id);

        return (
          <button
            key={seat.id}
            onClick={() => toggleSeat(seat.id)}
            disabled={isBooked}
            className={`
              p-2 rounded text-xs border
              ${isBooked ? "bg-red-400 cursor-not-allowed" : ""}
              ${isSelected ? "bg-blue-500 text-white" : ""}
              ${!isBooked && !isSelected ? "bg-green-200" : ""}
            `}
          >
            {seat.rowLabel}{seat.seatNumber}
          </button>
        );
      })}
    </div>
  );
}