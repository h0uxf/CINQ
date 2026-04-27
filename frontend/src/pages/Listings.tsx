import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../api/movies';
import { useResponsive } from '../hooks/useResponsive';
import MovieCard from '../components/MovieCard';

type ApiMovie = {
  id: number;
  title: string;
  description?: string;
  durationMinutes?: number;
  posterUrl?: string | null;
};

export default function Listings() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [search, setSearch] = useState('');
  const px = isMobile ? '24px' : '80px';

  const { data, isLoading } = useQuery<ApiMovie[]>({ queryKey: ['movies'], queryFn: getMovies });

  const filtered = (data ?? []).filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    (m.description ?? '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-in" style={{ paddingTop: 64 }}>
      <div style={{ padding: `${isMobile ? '40px' : '60px'} ${px} 32px` }}>
        <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, fontWeight: 500 }}>
          {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }).toUpperCase()}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 36 : 48, fontWeight: 900, fontStyle: 'italic', letterSpacing: -1, marginBottom: 28, color: 'var(--text)' }}>
          Now Showing
        </h1>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 28, maxWidth: 420 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }}>
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search films…"
            style={{ paddingLeft: 38 }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 14, lineHeight: 1 }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--border)', width: '100%' }} />

      <div style={{ padding: `32px ${px} 80px` }}>
        {isLoading && (
          <p style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading…</p>
        )}

        {!isLoading && filtered.length === 0 && (
          <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 22, marginBottom: 12 }}>No results found</div>
            <div style={{ fontSize: 11, letterSpacing: 1 }}>Try a different search</div>
          </div>
        )}

        {!isLoading && filtered.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? '160px' : '210px'}, 1fr))`, gap: 2 }}>
            {filtered.map((m, i) => (
              <MovieCard key={m.id} movie={m} index={i} onClick={() => navigate(`/movie/${m.id}`)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
