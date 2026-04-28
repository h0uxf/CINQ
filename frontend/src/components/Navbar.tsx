import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getToken, logout } from '../auth/token';
import { getUserFromToken } from '../utils/auth';
import { useResponsive } from '../hooks/useResponsive';

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7.5 1v1.5M7.5 12.5V14M1 7.5h1.5M12.5 7.5H14M3 3l1.1 1.1M10.9 10.9L12 12M3 12l1.1-1.1M10.9 4.1L12 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M12.5 8.5A5.5 5.5 0 016.5 2.5a5.5 5.5 0 100 10 5.5 5.5 0 006-4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeBtnHov, setThemeBtnHov] = useState(false);

  const tokenUser = getUserFromToken();
  const token = getToken();

  const displayName = tokenUser?.email
    ? tokenUser.email.split('@')[0].replace(/[._-]/g, ' ')
    : '';
  const initials = displayName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/listings', label: 'Now Showing' },
  ];

  function navTo(path: string) {
    navigate(path);
    setMobileOpen(false);
    setDropOpen(false);
  }

  function handleSignOut() {
    logout();
    navigate('/login');
    setDropOpen(false);
    setMobileOpen(false);
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 64,
        borderBottom: '1px solid var(--border)',
        background: isDark ? 'rgba(9,8,7,0.92)' : 'rgba(242,235,224,0.92)',
        backdropFilter: 'blur(12px)',
        transition: 'background 0.4s',
      }}>
        {/* Logo */}
        <button onClick={() => navTo('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, letterSpacing: 6, color: 'var(--text)', textTransform: 'uppercase', transition: 'color 0.3s' }}>
            CINQ
          </span>
        </button>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 32 }}>
            {links.map(l => (
              <button
                key={l.path}
                onClick={() => navTo(l.path)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500,
                  color: location.pathname === l.path ? 'var(--accent)' : 'var(--text-muted)',
                  transition: 'color 0.2s',
                  padding: '4px 0',
                  borderBottom: location.pathname === l.path ? '1px solid var(--accent)' : '1px solid transparent',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={isDark ? 'Switch to light' : 'Switch to dark'}
            onMouseEnter={() => setThemeBtnHov(true)}
            onMouseLeave={() => setThemeBtnHov(false)}
            style={{
              background: 'none',
              border: '1px solid',
              borderColor: themeBtnHov ? 'var(--border2)' : 'var(--border)',
              cursor: 'pointer', width: 34, height: 34,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: themeBtnHov ? 'var(--accent)' : 'var(--text-muted)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
            >
              <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor', transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(45deg) translate(4px,5px)' : 'none' }} />
              <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.15s' }} />
              <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor', transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(-45deg) translate(4px,-5px)' : 'none' }} />
            </button>
          )}

          {/* Desktop auth */}
          {!isMobile && (
            token ? (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setDropOpen(o => !o)}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-mid)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border2)'; }}
                  style={{ background: 'none', border: '1px solid var(--border2)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px 6px 8px', color: 'var(--text)', transition: 'border-color 0.2s' }}
                >
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--accent-dim)', border: '1px solid var(--accent-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--accent)' }}>{initials || '?'}</span>
                  </div>
                  <span style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 500, color: 'var(--text)', fontFamily: "'DM Sans', sans-serif" }}>
                    {displayName.split(' ')[0] || 'Account'}
                  </span>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ transition: 'transform 0.2s', transform: dropOpen ? 'rotate(180deg)' : 'none' }}>
                    <path d="M1 1l3 3 3-3" stroke="var(--text-muted)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>
                {dropOpen && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: 180, background: 'var(--surface)', border: '1px solid var(--border)', zIndex: 200, animation: 'pageIn 0.2s cubic-bezier(0.22,1,0.36,1)' }}>
                    {[
                      { label: 'My Bookings', path: '/profile' },
                      ...(['ADMIN', 'MANAGER'].includes(tokenUser?.role ?? '') ? [{ label: 'Admin Panel', path: '/admin' }] : []),
                    ].map(item => (
                      <button
                        key={item.label}
                        onClick={() => navTo(item.path)}
                        onMouseEnter={e => { const el = e.target as HTMLButtonElement; el.style.color = 'var(--accent)'; el.style.background = 'var(--accent-dim)'; }}
                        onMouseLeave={e => { const el = e.target as HTMLButtonElement; el.style.color = 'var(--text-muted)'; el.style.background = 'none'; }}
                        style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', background: 'none', border: 'none', borderBottom: '1px solid var(--border)', cursor: 'pointer', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, color: 'var(--text-muted)', transition: 'color 0.15s, background 0.15s', fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.label}
                      </button>
                    ))}
                    <button
                      onClick={handleSignOut}
                      onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = 'rgba(200,112,112,0.08)'; }}
                      onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = 'none'; }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, color: '#c87070', transition: 'background 0.15s', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 10 }}>
                <Link
                  to="/login"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = 'var(--text)'; }}
                  onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  style={{ background: 'var(--accent)', border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500, color: '#0c0800', padding: '8px 18px', textDecoration: 'none', transition: 'background 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={e => { (e.target as HTMLAnchorElement).style.background = '#f0bc8c'; }}
                  onMouseLeave={e => { (e.target as HTMLAnchorElement).style.background = 'var(--accent)'; }}
                >
                  Join
                </Link>
              </div>
            )
          )}
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobile && mobileOpen && (
        <div className="mobile-nav-overlay">
          {links.map((l, i) => (
            <button
              key={l.path}
              onClick={() => navTo(l.path)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 36, fontWeight: 900, color: location.pathname === l.path ? 'var(--accent)' : 'var(--text)', animation: `fadeUp 0.4s ${i * 0.08}s cubic-bezier(0.22,1,0.36,1) both` }}
            >
              {l.label}
            </button>
          ))}
          <div style={{ height: 1, background: 'var(--border)', width: 80 }} />
          {token ? (
            <>
              <button onClick={() => navTo('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>My Bookings</button>
              {['ADMIN', 'MANAGER'].includes(tokenUser?.role ?? '') && (
                <button onClick={() => navTo('/admin')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Admin Panel</button>
              )}
              <button onClick={handleSignOut} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#c87070', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Sign Out</button>
            </>
          ) : (
            <button onClick={() => navTo('/login')} style={{ background: 'var(--accent)', border: 'none', cursor: 'pointer', fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500, color: '#0c0800', padding: '12px 32px', fontFamily: "'DM Sans', sans-serif" }}>Sign In / Join</button>
          )}
        </div>
      )}
    </>
  );
}
