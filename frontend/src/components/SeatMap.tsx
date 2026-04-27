import { useState } from 'react';
import { useResponsive } from '../hooks/useResponsive';

type Seat = {
  id: number;
  rowLabel: string;
  seatNumber: number;
};

type Props = {
  seats: Seat[];
  bookedSeatIds: number[];
  standardPrice: number;
  premiumPrice: number;
  onChange?: (selected: Seat[]) => void;
};

const PREMIUM_ROWS = new Set(['A', 'B', 'C']);

export default function SeatMap({ seats, bookedSeatIds, standardPrice, premiumPrice, onChange }: Props) {
  const [selected, setSelected] = useState<Seat[]>([]);
  const { isMobile } = useResponsive();

  const rows = seats.reduce<Record<string, Seat[]>>((acc, seat) => {
    if (!acc[seat.rowLabel]) acc[seat.rowLabel] = [];
    acc[seat.rowLabel].push(seat);
    return acc;
  }, {});

  function toggleSeat(seat: Seat) {
    if (bookedSeatIds.includes(seat.id)) return;
    const updated = selected.find(s => s.id === seat.id)
      ? selected.filter(s => s.id !== seat.id)
      : [...selected, seat];
    setSelected(updated);
    onChange?.(updated);
  }

  return (
    <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', minWidth: isMobile ? 460 : 'auto' }}>
        {Object.entries(rows).map(([row, rowSeats]) => {
          const isPrem = PREMIUM_ROWS.has(row);
          return (
            <div key={row} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 9, letterSpacing: 1.5, color: 'var(--text-sub)', fontWeight: 500, width: 16, textAlign: 'right', flexShrink: 0 }}>{row}</span>
              <div style={{ display: 'flex', gap: isMobile ? 3 : 4 }}>
                {rowSeats.map((seat, ci) => {
                  const isSel = !!selected.find(s => s.id === seat.id);
                  const isBooked = bookedSeatIds.includes(seat.id);
                  const addGap = ci === 6;
                  return (
                    <div key={seat.id} style={{ display: 'flex', alignItems: 'center' }}>
                      {addGap && <div style={{ width: isMobile ? 12 : 16 }} />}
                      <button
                        onClick={() => toggleSeat(seat)}
                        title={isBooked ? 'Unavailable' : `${isPrem ? 'Premium' : 'Standard'} — £${isPrem ? premiumPrice : standardPrice}`}
                        style={{
                          width: isMobile ? 24 : 28, height: isMobile ? 20 : 24,
                          background: isBooked ? 'var(--surface)' : isSel ? 'var(--accent)' : isPrem ? '#1e1608' : 'var(--surface2)',
                          border: '1px solid',
                          borderColor: isBooked ? 'var(--text-sub)' : isSel ? 'var(--accent)' : isPrem ? 'rgba(231,171,121,0.25)' : 'var(--border)',
                          cursor: isBooked ? 'not-allowed' : 'pointer',
                          opacity: isBooked ? 0.22 : 1,
                          transition: 'all 0.15s',
                          borderRadius: 3,
                          transform: isSel ? 'scale(1.1)' : 'scale(1)',
                          boxShadow: isSel ? '0 0 8px rgba(231,171,121,0.4)' : 'none',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              {isPrem && (
                <span style={{ fontSize: 7, letterSpacing: 2, color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 500, opacity: 0.6, flexShrink: 0 }}>P</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
