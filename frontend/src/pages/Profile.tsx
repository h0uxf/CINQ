import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMyProfile } from '../api/user';
import { useResponsive } from '../hooks/useResponsive';
import Btn from '../components/Btn';
import QRCode from '../components/QRCode';

type BookingSeat = { seat: { id: number; rowLabel: string; seatNumber: number } };

type Booking = {
  id: number;
  status: string;
  createdAt?: string;
  seats: BookingSeat[];
  screening: {
    startTime: string;
    price?: number;
    hall: { name: string };
    movie: { title: string };
  };
};

function bookingRef(b: Booking) {
  return `CINQ-${b.id.toString().padStart(8, '0')}`;
}

function isUpcoming(b: Booking) {
  return new Date(b.screening.startTime) > new Date();
}

function QRModal({ booking, onClose }: { booking: Booking; onClose: () => void }) {
  const ref = bookingRef(booking);
  const dt = new Date(booking.screening.startTime);
  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}
    >
      <div
        style={{ background: 'var(--surface)', border: '1px solid var(--border2)', padding: '32px 28px', maxWidth: 320, width: '100%', textAlign: 'center' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 18, color: 'var(--accent)', marginBottom: 4 }}>
          {booking.screening.movie.title}
        </div>
        <div style={{ fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>
          {dt.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' })} · {dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · {booking.screening.hall.name}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <div style={{ padding: 12, background: 'var(--surface2)', border: '1px solid var(--border)' }}>
            <QRCode value={ref} size={168} />
          </div>
        </div>

        <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>{ref}</div>
        <div style={{ fontSize: 9, color: 'var(--text-muted)', marginBottom: 20 }}>
          {booking.seats.map(s => `${s.seat.rowLabel}${s.seat.seatNumber}`).join(', ')}
        </div>

        <div style={{ fontSize: 7, letterSpacing: 2, color: 'var(--text-sub)', textTransform: 'uppercase', marginBottom: 20 }}>Scan at the door</div>

        <button
          onClick={onClose}
          style={{ background: 'none', border: '1px solid var(--border2)', cursor: 'pointer', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', padding: '8px 20px', fontFamily: "'DM Sans', sans-serif" }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Profile() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const px = isMobile ? '24px' : '80px';
  const [qrBooking, setQrBooking] = useState<Booking | null>(null);

  const { data, isLoading } = useQuery({ queryKey: ['me'], queryFn: getMyProfile });

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 64 }}>
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading…</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 64 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>User not found.</p>
      </div>
    );
  }

  const upcoming = (data.bookings as Booking[]).filter(isUpcoming);
  const past = (data.bookings as Booking[]).filter(b => !isUpcoming(b));

  const displayName = `${data.firstName ?? ''} ${data.lastName ?? ''}`.trim() || data.email;
  const initials = (data.firstName?.[0] ?? '') + (data.lastName?.[0] ?? '');

  return (
    <div className="page-in" style={{ paddingTop: 64 }}>
      <div style={{ padding: `${isMobile ? '40px' : '60px'} ${px} 80px`, maxWidth: 860, margin: '0 auto' }}>

        {/* Profile header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48, flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '1px solid var(--border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface2)', flexShrink: 0 }}>
            {initials ? (
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent)', fontFamily: "'DM Sans', sans-serif" }}>{initials.toUpperCase()}</span>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="7" r="4" stroke="#E7AB79" strokeWidth="1.2" />
                <path d="M2 21c0-4.971 4.029-9 9-9s9 4.029 9 9" stroke="#E7AB79" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            )}
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, fontStyle: 'italic', marginBottom: 2, color: 'var(--text)' }}>{displayName}</div>
            <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              {data.role} · {(data.bookings as Booking[]).length} bookings
            </div>
          </div>
        </div>

        {/* Upcoming bookings */}
        {upcoming.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16, fontWeight: 500 }}>Upcoming</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {upcoming.map(b => {
                const dt = new Date(b.screening.startTime);
                return (
                  <div
                    key={b.id}
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: isMobile ? 'wrap' : 'nowrap', animation: 'staggerIn 0.4s cubic-bezier(0.22,1,0.36,1) both' }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 15, fontWeight: 600, color: 'var(--accent)', marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {b.screening.movie.title}
                      </div>
                      <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        {dt.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' })} · {dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · Hall {b.screening.hall.name}
                      </div>
                      <div style={{ fontSize: 9, letterSpacing: 1, color: 'var(--text-muted)', marginTop: 2 }}>
                        {b.seats.map(s => `${s.seat.rowLabel}${s.seat.seatNumber}`).join(', ')}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                      <button
                        onClick={() => setQrBooking(b)}
                        title="View ticket QR"
                        style={{
                          background: 'var(--accent-dim)',
                          border: '1px solid var(--accent-mid)',
                          cursor: 'pointer',
                          padding: '6px 10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: 8,
                          letterSpacing: 2,
                          textTransform: 'uppercase',
                          color: 'var(--accent)',
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 500,
                          transition: 'background 0.15s',
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <rect x="0.5" y="0.5" width="4" height="4" stroke="currentColor" strokeWidth="1" />
                          <rect x="7.5" y="0.5" width="4" height="4" stroke="currentColor" strokeWidth="1" />
                          <rect x="0.5" y="7.5" width="4" height="4" stroke="currentColor" strokeWidth="1" />
                          <rect x="2" y="2" width="1" height="1" fill="currentColor" />
                          <rect x="9" y="2" width="1" height="1" fill="currentColor" />
                          <rect x="2" y="9" width="1" height="1" fill="currentColor" />
                          <path d="M7.5 7.5h1.5v1.5M9 9v3M10.5 7.5v1.5h1.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                        </svg>
                        Ticket
                      </button>
                      <div style={{ fontSize: 8, letterSpacing: 2, color: 'var(--accent)', textTransform: 'uppercase', border: '1px solid var(--accent-mid)', padding: '3px 8px' }}>Upcoming</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {upcoming.length > 0 && past.length > 0 && (
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 36 }} />
        )}

        {/* Past bookings */}
        {past.length > 0 && (
          <div>
            <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16, fontWeight: 500 }}>Past Bookings</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {past.map((b, i) => {
                const dt = new Date(b.screening.startTime);
                return (
                  <div
                    key={b.id}
                    style={{ padding: '16px 20px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.6, flexWrap: 'wrap', gap: 8, animation: `staggerIn 0.4s ${i * 0.07}s cubic-bezier(0.22,1,0.36,1) both` }}
                  >
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 14, fontWeight: 600, marginBottom: 4, color: 'var(--text)' }}>{b.screening.movie.title}</div>
                      <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        {dt.toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' })} · {dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', textAlign: 'right' }}>
                      {b.seats.map(s => `${s.seat.rowLabel}${s.seat.seatNumber}`).join(', ')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(data.bookings as Booking[]).length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 22, marginBottom: 16, color: 'var(--text-muted)' }}>No bookings yet</div>
            <Btn onClick={() => navigate('/listings')}>Browse Films</Btn>
          </div>
        )}
      </div>

      {qrBooking && <QRModal booking={qrBooking} onClose={() => setQrBooking(null)} />}
    </div>
  );
}
