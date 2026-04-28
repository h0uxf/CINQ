import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAdminBookings, updateBookingStatus, type AdminBooking } from '../../api/admin';

const STATUS_COLOR: Record<string, string> = {
  CONFIRMED: '#4caf7d',
  PENDING: '#E7AB79',
  CANCELLED: '#c87070',
  EXPIRED: '#7a6d5a',
};

const ALL_STATUSES = ['CONFIRMED', 'PENDING', 'CANCELLED', 'EXPIRED'] as const;

export default function Bookings() {
  const qc = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const { data: bookings = [], isLoading } = useQuery({ queryKey: ['admin-bookings'], queryFn: getAdminBookings });

  const statusMut = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) => updateBookingStatus(id, status),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-bookings'] }),
  });

  const filtered = bookings.filter(b => {
    const matchStatus = statusFilter === 'all' || b.status === statusFilter;
    const matchSearch = !search ||
      b.user.email.toLowerCase().includes(search.toLowerCase()) ||
      b.screening.movie.title.toLowerCase().includes(search.toLowerCase()) ||
      String(b.id).includes(search);
    return matchStatus && matchSearch;
  });

  const totalRevenue = bookings
    .filter(b => b.status === 'CONFIRMED')
    .reduce((acc, b) => acc + b.seats.length * b.screening.price, 0);

  return (
    <div style={{ padding: '40px 40px 60px' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>Manage</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: 'var(--text)', margin: 0 }}>Bookings</h1>
      </div>

      {/* Summary strip */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
        {ALL_STATUSES.map(s => {
          const count = bookings.filter(b => b.status === s).length;
          return (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', color: STATUS_COLOR[s], border: `1px solid ${STATUS_COLOR[s]}`, padding: '2px 7px', opacity: 0.8 }}>{s}</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--text)' }}>{count}</span>
            </div>
          );
        })}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Revenue</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--accent)' }}>£{totalRevenue.toFixed(0)}</span>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', maxWidth: 280, flex: '1 1 200px' }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent)', pointerEvents: 'none', display: 'flex' }}>
            <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by email, movie, or ID…" style={{ paddingLeft: 36 }} />
        </div>
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)' }}>
          {(['all', ...ALL_STATUSES]).map(s => (
            <button key={s} onClick={() => setStatusFilter(s)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 14px',
              fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500,
              color: statusFilter === s ? (STATUS_COLOR[s] ?? 'var(--accent)') : 'var(--text-muted)',
              borderBottom: `2px solid ${statusFilter === s ? (STATUS_COLOR[s] ?? 'var(--accent)') : 'transparent'}`,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: -1,
            }}>{s}</button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading…</p>
      ) : (
        <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
                {['ID', 'User', 'Movie', 'Screening', 'Seats', 'Value', 'Status', 'Change'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 7, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, i) => {
                const dt = new Date(b.screening.startTime);
                const value = b.seats.length * b.screening.price;
                return (
                  <tr key={b.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--surface)' }}>
                    <td style={{ padding: '12px 16px', fontSize: 10, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#{b.id}</td>
                    <td style={{ padding: '12px 16px', fontSize: 11, color: 'var(--text)' }}>
                      <div>{b.user.email}</div>
                      {(b.user.firstName || b.user.lastName) && (
                        <div style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 2 }}>{b.user.firstName} {b.user.lastName}</div>
                      )}
                    </td>
                    <td style={{ padding: '12px 16px', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 13, color: 'var(--accent)', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.screening.movie.title}</td>
                    <td style={{ padding: '12px 16px', fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} · {dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      <div style={{ fontSize: 9, marginTop: 2 }}>{b.screening.hall.name}</div>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 10, color: 'var(--text-muted)' }}>
                      {b.seats.map(s => `${s.seat.rowLabel}${s.seat.seatNumber}`).join(', ')}
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 12, color: 'var(--text)', fontFamily: "'Playfair Display', serif" }}>£{value}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, color: STATUS_COLOR[b.status], border: `1px solid ${STATUS_COLOR[b.status]}`, padding: '2px 7px', opacity: 0.9 }}>
                        {b.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <select
                        value={b.status}
                        onChange={e => statusMut.mutate({ id: b.id, status: e.target.value })}
                        style={{
                          background: 'var(--surface2)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-muted)',
                          padding: '4px 8px',
                          fontSize: 9,
                          letterSpacing: 1,
                          fontFamily: "'DM Sans', sans-serif",
                          cursor: 'pointer',
                          appearance: 'none',
                        }}
                      >
                        {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr><td colSpan={8} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>No bookings found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
