import { useState } from 'react';
import Poster from './Poster';

type ApiMovie = {
  id: number;
  title: string;
  description?: string;
  durationMinutes?: number;
  posterUrl?: string | null;
};

type MovieCardProps = {
  movie: ApiMovie;
  onClick: () => void;
  index?: number;
};

export default function MovieCard({ movie, onClick, index = 0 }: MovieCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        transition: 'border-color 0.25s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
        transform: hovered ? 'translateY(-6px)' : 'none',
        borderColor: hovered ? 'var(--accent-mid)' : 'var(--border)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.4)' : 'none',
        overflow: 'hidden',
        animation: 'staggerIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
        animationDelay: `${index * 0.07}s`,
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Poster movieId={movie.id} title={movie.title} posterUrl={movie.posterUrl} height={220} showTitle={false} />
        {hovered && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'overlayIn 0.2s ease' }}>
            <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, border: '1px solid var(--accent-mid)', padding: '8px 20px' }}>
              View Film
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          {movie.durationMinutes && (
            <span style={{ fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>{movie.durationMinutes} min</span>
          )}
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 600, letterSpacing: 0.5, marginBottom: 10, color: 'var(--text)' }}>
          {movie.title}
        </div>
        {movie.description && (
          <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {movie.description}
          </p>
        )}
      </div>
    </div>
  );
}
