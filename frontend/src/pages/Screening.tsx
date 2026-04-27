import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getScreeningSeats } from '../api/seats';
import { useResponsive } from '../hooks/useResponsive';
import { getPosterColors } from '../utils/poster';
import SeatMap from '../components/SeatMap';
import Btn from '../components/Btn';

type LocationState = {
  movie?: { id: number; title: string; posterUrl?: string | null };
  day?: string;
  time?: string;
  price?: number;
};

type SeatObj = {
  id: number;
  rowLabel: string;
  seatNumber: number;
};

const PREMIUM_ROWS = new Set(['A', 'B', 'C']);

export default function Screening() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();
  const state = (location.state ?? {}) as LocationState;

  const [selectedSeats, setSelectedSeats] = useState<SeatObj[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['seats', id],
    queryFn: () => getScreeningSeats(id!),
    enabled: !!id,
  });

  const movieColors = state.movie ? getPosterColors(state.movie.id) : { accent: '#E7AB79' };
  const standardPrice = state.price ?? 14;
  const premiumPrice = Math.round(standardPrice * 1.43);

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 64 }}>
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading seats…</p>
      </div>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 64 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>No seat data available.</p>
      </div>
    );
  }

  const seats: SeatObj[] = data.map((s: { id: number; rowLabel: string; seatNumber: number }) => ({
    id: s.id, rowLabel: s.rowLabel, seatNumber: s.seatNumber,
  }));
  const bookedSeatIds: number[] = data.filter((s: { isBooked: boolean }) => s.isBooked).map((s: { id: number }) => s.id);

  const total = selectedSeats.reduce((acc, s) => acc + (PREMIUM_ROWS.has(s.rowLabel) ? premiumPrice : standardPrice), 0);

  function proceed() {
    if (!selectedSeats.length) return;
    navigate('/checkout', {
      state: {
        screeningId: Number(id),
        selectedSeats,
        total,
        movie: state.movie,
        day: state.day,
        time: state.time,
        standardPrice,
        premiumPrice,
      },
    });
  }

  const px = isMobile ? '16px' : '48px';

  return (
    <div className="page-in" style={{ paddingTop: 64 }}>
      <div style={{ padding: isMobile ? '32px 16px 80px' : '48px 48px 80px', maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 12 }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
            ← Back
          </button>
          {state.movie && (
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 18, fontWeight: 600, color: movieColors.accent }}>{state.movie.title}</div>
              {state.day && state.time && (
                <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{state.day} · {state.time}</div>
              )}
            </div>
          )}
        </div>

        <div style={{ height: 1, background: 'var(--border)', width: '100%', marginBottom: 36 }} />

        {/* Screen indicator */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-block', width: '55%', height: 4, background: 'linear-gradient(to right, transparent, var(--accent-mid), transparent)', borderRadius: 2, marginBottom: 8 }} />
          <div style={{ fontSize: 7, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-sub)', fontWeight: 500 }}>Screen</div>
        </div>

        {/* Seat map */}
        <div style={{ marginBottom: 36 }}>
          <SeatMap
            seats={seats}
            bookedSeatIds={bookedSeatIds}
            standardPrice={standardPrice}
            premiumPrice={premiumPrice}
            onChange={setSelectedSeats}
          />
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? 16 : 24, marginBottom: 36, flexWrap: 'wrap' }}>
          {[
            ['Available', 'var(--surface2)', 'var(--border)', false],
            ['Premium', '#1e1608', 'rgba(231,171,121,0.25)', false],
            ['Selected', 'var(--accent)', 'var(--accent)', false],
            ['Taken', 'var(--surface)', 'var(--text-sub)', true],
          ].map(([label, bg, bc, dim]) => (
            <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 16, height: 14, background: bg as string, border: `1px solid ${bc}`, borderRadius: 2, opacity: dim ? 0.22 : 1, boxShadow: label === 'Selected' ? '0 0 6px rgba(231,171,121,0.4)' : 'none' }} />
              <span style={{ fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>{label as string}</span>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'var(--border)', width: '100%', marginBottom: 28 }} />

        {/* Summary bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, paddingLeft: px, paddingRight: px }}>
          <div>
            {selectedSeats.length > 0 ? (
              <>
                <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>
                  {selectedSeats.map(s => `${s.rowLabel}-${s.seatNumber}`).join(', ')}
                </div>
                <div style={{ fontSize: 24, color: 'var(--accent)', fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>£{total}</div>
              </>
            ) : (
              <div style={{ fontSize: 10, color: 'var(--text-sub)', letterSpacing: 2, textTransform: 'uppercase' }}>Choose your seats above</div>
            )}
          </div>
          <Btn onClick={proceed} disabled={selectedSeats.length === 0}>
            Continue — {selectedSeats.length} {selectedSeats.length === 1 ? 'Seat' : 'Seats'}
          </Btn>
        </div>
      </div>
    </div>
  );
}
