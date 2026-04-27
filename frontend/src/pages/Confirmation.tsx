import { useNavigate, useLocation } from 'react-router-dom';
import { useResponsive } from '../hooks/useResponsive';
import Btn from '../components/Btn';

type SeatObj = { id: number; rowLabel: string; seatNumber: number };

type LocationState = {
  ref?: string;
  movie?: { title: string };
  day?: string;
  time?: string;
  seats?: SeatObj[];
  total?: number;
};

export default function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();
  const state = (location.state ?? {}) as LocationState;
  const { ref, movie, day, time, seats = [], total = 0 } = state;

  const bookingRef = ref ?? `CINQ-${Math.random().toString(36).slice(2, 6).toUpperCase()}-0000`;

  return (
    <div
      className="page-in"
      style={{ paddingTop: 64, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '80px 24px 60px' : '64px 24px' }}
    >
      <div style={{ maxWidth: 500, width: '100%', textAlign: 'center' }}>
        {/* Checkmark */}
        <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1.5px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', animation: 'checkIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polyline points="4,12 9,17 20,6" stroke="#E7AB79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10, fontWeight: 500 }}>Booking Confirmed</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 30 : 36, fontWeight: 900, fontStyle: 'italic', marginBottom: 8, color: 'var(--text)' }}>
          You're all set.
        </h1>
        <div style={{ fontSize: 10, letterSpacing: 3, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 36 }}>{bookingRef}</div>

        {/* Ticket stub */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '28px', marginBottom: 28, textAlign: 'left', position: 'relative' }}>
          {/* Notch left */}
          <div style={{ position: 'absolute', top: '50%', left: -1, transform: 'translateY(-50%)', width: 10, height: 20, background: 'var(--bg)', borderRadius: '0 10px 10px 0', border: '1px solid var(--border)', borderLeft: 'none' }} />
          {/* Notch right */}
          <div style={{ position: 'absolute', top: '50%', right: -1, transform: 'translateY(-50%)', width: 10, height: 20, background: 'var(--bg)', borderRadius: '10px 0 0 10px', border: '1px solid var(--border)', borderRight: 'none' }} />

          {movie && (
            <>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 20, fontWeight: 700, color: 'var(--accent)', marginBottom: 22 }}>{movie.title}</div>
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 18 }} />
            </>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            {[
              ['Date', day ?? '—'],
              ['Time', time ?? '—'],
              ['Seats', seats.length ? seats.map(s => `${s.rowLabel}${s.seatNumber}`).join(', ') : '—'],
              ['Total', `£${total}`],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4, fontWeight: 500 }}>{k}</div>
                <div style={{ fontSize: 13, color: 'var(--text)' }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--border)', marginBottom: 18 }} />

          {/* QR placeholder */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 76, height: 76, background: 'var(--surface2)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
              <svg width="76" height="76" xmlns="http://www.w3.org/2000/svg">
                <pattern id="qr-p" width="8" height="8">
                  <rect width="4" height="4" fill="rgba(231,171,121,0.18)" />
                  <rect x="4" y="4" width="4" height="4" fill="rgba(231,171,121,0.18)" />
                </pattern>
                <rect width="76" height="76" fill="url(#qr-p)" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, letterSpacing: 1, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>QR<br />CODE</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Btn variant="ghost" onClick={() => navigate('/profile')}>My Bookings</Btn>
          <Btn onClick={() => navigate('/')}>Back to Home</Btn>
        </div>
      </div>
    </div>
  );
}
