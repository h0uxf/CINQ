import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../api/movies';
import { getPosterColors } from '../utils/poster';
import { useResponsive } from '../hooks/useResponsive';
import MovieCard from '../components/MovieCard';
import Btn from '../components/Btn';

type ApiMovie = {
  id: number;
  title: string;
  description?: string;
  durationMinutes?: number;
  posterUrl?: string | null;
};

export default function Home() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const { data, isLoading } = useQuery<ApiMovie[]>({ queryKey: ['movies'], queryFn: getMovies });

  const px = isMobile ? '24px' : '80px';
  const featured: ApiMovie | undefined = data?.[0];
  const featuredColors = featured ? getPosterColors(featured.id) : { bg: '#0c0904', accent: '#E7AB79' };
  const tickerTitles = data ? [...data, ...data].map(m => m.title) : [];

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading…</p>
      </div>
    );
  }

  return (
    <div className="page-in">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: featuredColors.bg }}>
          {featured?.posterUrl ? (
            <img src={featured.posterUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
          ) : (
            <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.18 }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-s" width="40" height="40" patternTransform="rotate(35)">
                  <line x1="0" y1="0" x2="0" y2="40" stroke={featuredColors.accent} strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-s)" />
            </svg>
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(9,8,7,0.98) 35%, rgba(9,8,7,0.4) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,8,7,1) 0%, transparent 50%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, padding: `0 ${px} ${isMobile ? '80px' : '100px'}`, maxWidth: 700 }}>
          {featured ? (
            <>
              <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>Now Showing</span>
                <div style={{ height: 1, width: 40, background: 'var(--accent)', opacity: 0.4 }} />
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? '46px' : 'clamp(52px,6vw,88px)', fontWeight: 900, fontStyle: 'italic', lineHeight: 0.95, letterSpacing: -1, color: 'var(--text)', marginBottom: 28, animation: 'fadeUp 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both' }}>
                {featured.title}
              </h1>
              {featured.description && (
                <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 480, marginBottom: 36, animation: 'fadeUp 0.7s 0.25s cubic-bezier(0.22,1,0.36,1) both' }}>
                  {featured.description}
                </p>
              )}
              {featured.durationMinutes && (
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, marginBottom: 40, flexWrap: 'wrap', animation: 'fadeUp 0.7s 0.35s cubic-bezier(0.22,1,0.36,1) both' }}>
                  <span style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, textTransform: 'uppercase' }}>{featured.durationMinutes} min</span>
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeUp 0.7s 0.45s cubic-bezier(0.22,1,0.36,1) both' }}>
                <Btn onClick={() => navigate(`/movie/${featured.id}`)}>Book Tickets</Btn>
                <Btn variant="ghost" onClick={() => navigate('/listings')}>All Films</Btn>
              </div>
            </>
          ) : (
            <>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? '46px' : 'clamp(52px,6vw,88px)', fontWeight: 900, fontStyle: 'italic', lineHeight: 0.95, letterSpacing: -1, color: 'var(--text)', marginBottom: 28 }}>
                Cinema,<br />elevated.
              </h1>
              <Btn onClick={() => navigate('/listings')}>Explore Films</Btn>
            </>
          )}
        </div>

        {!isMobile && (
          <div style={{ position: 'absolute', bottom: 40, right: 80, zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--accent))', opacity: 0.5 }} />
            <span style={{ fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', writingMode: 'vertical-rl' }}>Scroll</span>
          </div>
        )}
      </section>

      {/* ── TICKER ────────────────────────────────────────── */}
      {tickerTitles.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', overflow: 'hidden', background: 'var(--surface)' }}>
          <div style={{ display: 'flex', gap: 64, whiteSpace: 'nowrap', animation: 'ticker 22s linear infinite' }}>
            {tickerTitles.map((t, i) => (
              <span key={i} style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>
                {t} <span style={{ color: 'var(--accent)', margin: '0 16px' }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── GRID ─────────────────────────────────────────── */}
      <section style={{ padding: `${isMobile ? '48px' : '80px'} ${px} ${isMobile ? '64px' : '100px'}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10, fontWeight: 500 }}>Curated Selection</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 28 : 36, fontWeight: 900, fontStyle: 'italic', letterSpacing: -0.5, color: 'var(--text)' }}>Now Showing</h2>
          </div>
          <button onClick={() => navigate('/listings')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
            View All →
          </button>
        </div>
        {data && data.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? '160px' : '200px'}, 1fr))`, gap: 2 }}>
            {data.map((m, i) => (
              <MovieCard key={m.id} movie={m} index={i} onClick={() => navigate(`/movie/${m.id}`)} />
            ))}
          </div>
        ) : (
          <p style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: 1 }}>No films scheduled.</p>
        )}
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: `28px ${px}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 900, letterSpacing: 6, color: 'var(--text-muted)', textTransform: 'uppercase' }}>CINQ</span>
        <span style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-sub)', textTransform: 'uppercase' }}>© 2026 — Cinema Booking</span>
      </footer>
    </div>
  );
}
