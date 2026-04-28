import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getAdminStats, getAdminBookings } from '../../api/admin';

function StatCard({ label, value, sub, accent }: { label: string; value: string | number; sub?: string; accent?: boolean }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: `1px solid ${accent ? 'var(--accent-mid)' : 'var(--border)'}`,
      padding: '24px 28px',
    }}>
      <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: accent ? 'var(--accent)' : 'var(--text-muted)', marginBottom: 12, fontWeight: 500 }}>{label}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: accent ? 'var(--accent)' : 'var(--text)', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 9, letterSpacing: 1, color: 'var(--text-muted)', marginTop: 8 }}>{sub}</div>}
    </div>
  );
}

const STATUS_COLOR: Record<string, string> = {
  CONFIRMED: '#4caf7d',
  PENDING: '#E7AB79',
  CANCELLED: '#c87070',
  EXPIRED: '#7a6d5a',
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { data: stats, isLoading: statsLoading } = useQuery({ queryKey: ['admin-stats'], queryFn: getAdminStats });
  const { data: bookings } = useQuery({ queryKey: ['admin-bookings'], queryFn: getAdminBookings });

  const recent = (bookings ?? []).slice(0, 6);

  return (
    <div style={{ padding: '40px 40px 60px' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>Overview</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: 'var(--text)', margin: 0 }}>Dashboard</h1>
      </div>

      {statsLoading ? (
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading…</p>
      ) : stats && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 40 }}>
            <StatCard label="Active Movies" value={stats.activeMovies} sub={`${stats.totalMovies} total`} />
            <StatCard label="Halls" value={stats.halls} />
            <StatCard label="Upcoming Screenings" value={stats.upcomingScreenings} />
            <StatCard label="Confirmed Bookings" value={stats.confirmedBookings} sub={`${stats.totalBookings} total`} />
            <StatCard label="Total Users" value={stats.totalUsers} />
            <StatCard label="Revenue" value={`£${stats.revenue.toLocaleString('en-GB', { minimumFractionDigits: 0 })}`} accent />
          </div>
        </>
      )}

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>Recent Bookings</div>
          <button onClick={() => navigate('/admin/bookings')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>View all →</button>
        </div>

        <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
                {['User', 'Movie', 'Screening', 'Seats', 'Status'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 7, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recent.map((b, i) => (
                <tr key={b.id} style={{ borderBottom: i < recent.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--surface)' }}>
                  <td style={{ padding: '12px 16px', fontSize: 11, color: 'var(--text)' }}>{b.user.email}</td>
                  <td style={{ padding: '12px 16px', fontSize: 11, color: 'var(--text)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>{b.screening.movie.title}</td>
                  <td style={{ padding: '12px 16px', fontSize: 10, color: 'var(--text-muted)' }}>
                    {new Date(b.screening.startTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: 11, color: 'var(--text-muted)' }}>{b.seats.length}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, color: STATUS_COLOR[b.status] ?? 'var(--text-muted)', border: `1px solid ${STATUS_COLOR[b.status] ?? 'var(--border)'}`, padding: '2px 7px', opacity: 0.9 }}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
              {recent.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>No bookings yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
