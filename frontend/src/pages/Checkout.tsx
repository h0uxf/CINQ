import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createBooking } from '../api/bookings';
import { useResponsive } from '../hooks/useResponsive';
import Btn from '../components/Btn';

type SeatObj = { id: number; rowLabel: string; seatNumber: number };

type LocationState = {
  screeningId?: number;
  selectedSeats?: SeatObj[];
  total?: number;
  movie?: { id: number; title: string };
  day?: string;
  time?: string;
  standardPrice?: number;
  premiumPrice?: number;
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 500 }}>
      {children}
    </div>
  );
}

const PREMIUM_ROWS = new Set(['A', 'B', 'C']);

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isTablet } = useResponsive();
  const px = isMobile ? '24px' : '80px';

  const state = (location.state ?? {}) as LocationState;
  const { screeningId, selectedSeats = [], total = 0, movie, day, time, standardPrice = 14, premiumPrice = 20 } = state;

  const [form, setForm] = useState({ name: '', card: '', expiry: '', cvv: '' });
  const [loading, setLoading] = useState(false);

  function handleChange(k: string, v: string) {
    let val = v;
    if (k === 'card')   val = v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    if (k === 'expiry') val = v.replace(/\D/g, '').slice(0, 4).replace(/^(\d{2})(\d)/, '$1/$2');
    if (k === 'cvv')    val = v.replace(/\D/g, '').slice(0, 3);
    setForm(f => ({ ...f, [k]: val }));
  }

  const valid = form.name.length > 2 && form.card.replace(/\s/g, '').length === 16 && form.expiry.length === 5 && form.cvv.length === 3;

  async function submit() {
    if (!valid || !screeningId) return;
    setLoading(true);
    try {
      const booking = await createBooking({ screeningId, seatIds: selectedSeats.map(s => s.id) });
      const ref = `CINQ-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${(booking?.id ?? Math.floor(Math.random() * 9999)).toString().padStart(4, '0')}`;
      navigate('/confirmation', {
        state: { ref, movie, day, time, seats: selectedSeats, total },
      });
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Booking failed. Please try again.';
      alert(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-in" style={{ paddingTop: 64 }}>
      <div style={{ padding: `56px ${px} 80px`, maxWidth: 900, margin: '0 auto' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>
          ← Back
        </button>
        <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, fontWeight: 500 }}>Checkout</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 28 : 36, fontWeight: 900, fontStyle: 'italic', marginBottom: 44, color: 'var(--text)' }}>
          Review &amp; Pay
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 320px', gap: isTablet ? 40 : 56 }}>
          {/* Payment form */}
          <div>
            <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 18, fontWeight: 500 }}>Payment Details</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <FieldLabel>Cardholder Name</FieldLabel>
                <input type="text" value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="Full name" autoComplete="cc-name" />
              </div>
              <div>
                <FieldLabel>Card Number</FieldLabel>
                <input type="text" value={form.card} onChange={e => handleChange('card', e.target.value)} placeholder="0000 0000 0000 0000" autoComplete="cc-number" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <FieldLabel>Expiry</FieldLabel>
                  <input type="text" value={form.expiry} onChange={e => handleChange('expiry', e.target.value)} placeholder="MM/YY" autoComplete="cc-exp" />
                </div>
                <div>
                  <FieldLabel>CVV</FieldLabel>
                  <input type="text" value={form.cvv} onChange={e => handleChange('cvv', e.target.value)} placeholder="123" autoComplete="cc-csc" />
                </div>
              </div>
            </div>

            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, padding: '14px 16px', background: 'var(--surface2)', border: '1px solid var(--border)' }}>
                <div style={{ width: 14, height: 14, border: '1.5px solid var(--border2)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', flexShrink: 0 }} />
                <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>Processing payment…</span>
              </div>
            )}

            {!loading && (
              <Btn onClick={submit} disabled={!valid} style={{ width: '100%', marginTop: 24, padding: '16px 32px' }}>
                Confirm — £{total}
              </Btn>
            )}
          </div>

          {/* Order summary */}
          <div>
            <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 18, fontWeight: 500 }}>Your Order</div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '24px' }}>
              {movie && (
                <>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 17, fontWeight: 600, color: 'var(--accent)', marginBottom: 4 }}>{movie.title}</div>
                  <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 20 }}>{day} · {time}</div>
                </>
              )}
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />
              {selectedSeats.map(s => (
                <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                    Seat {s.rowLabel}-{s.seatNumber} · {PREMIUM_ROWS.has(s.rowLabel) ? 'Premium' : 'Standard'}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--text)' }}>
                    £{PREMIUM_ROWS.has(s.rowLabel) ? premiumPrice : standardPrice}
                  </span>
                </div>
              ))}
              <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>Total</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: 'var(--accent)' }}>£{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
