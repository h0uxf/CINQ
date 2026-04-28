import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';

const NAV_ITEMS = [
  {
    to: '/admin',
    label: 'Dashboard',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="1" y="8" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8" y="8" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    to: '/admin/movies',
    label: 'Movies',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="3" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 3V12M11 3V12M1 6H4M11 6H14M1 9H4M11 9H14" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    to: '/admin/halls',
    label: 'Halls',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M1 13V5L7.5 2L14 5V13H1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="5" y="8" width="5" height="5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    to: '/admin/screenings',
    label: 'Screenings',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="2" width="13" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1 6H14M5 2V4M10 2V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/admin/users',
    label: 'Users',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="5" r="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1 14c0-3.314 2.91-6 6.5-6s6.5 2.686 6.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/admin/bookings',
    label: 'Bookings',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="3" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 3V12M10 3V12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 2" />
        <circle cx="5" cy="7.5" r="1" fill="currentColor" />
        <circle cx="10" cy="7.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    to: '/admin/genres',
    label: 'Genres',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M2 4h11M2 7.5h8M2 11h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', paddingTop: 64, background: 'var(--bg)' }}>
      {/* Sidebar */}
      {!isMobile && (
        <aside style={{
          width: 220,
          flexShrink: 0,
          background: 'var(--surface)',
          borderRight: '1px solid var(--border)',
          position: 'fixed',
          top: 64,
          bottom: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}>
          <div style={{ padding: '24px 20px 12px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>Admin Panel</div>
          </div>

          <nav style={{ padding: '12px 0', flex: 1 }}>
            {NAV_ITEMS.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/admin'}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 20px',
                  textDecoration: 'none',
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  background: isActive ? 'var(--accent-dim)' : 'transparent',
                  borderLeft: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                  transition: 'all 0.15s',
                })}
              >
                <span style={{ opacity: 0.8 }}>{icon}</span>
                {label}
              </NavLink>
            ))}
          </nav>

          <div style={{ padding: '12px 0', borderTop: '1px solid var(--border)' }}>
            <button
              onClick={() => navigate('/')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                fontWeight: 500,
                width: '100%',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M6 3L2 7.5L6 12M2 7.5H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Site
            </button>
          </div>
        </aside>
      )}

      {/* Mobile tab bar */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          zIndex: 100,
          overflowX: 'auto',
        }}>
          {NAV_ITEMS.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/admin'}
              style={({ isActive }) => ({
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '10px 14px',
                textDecoration: 'none',
                fontSize: 7,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
              })}
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Content */}
      <main style={{ flex: 1, marginLeft: isMobile ? 0 : 220, minWidth: 0, paddingBottom: isMobile ? 70 : 0 }}>
        <Outlet />
      </main>
    </div>
  );
}
