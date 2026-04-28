import { useEffect } from 'react';
import { getPosterColors } from '../utils/poster';

type TrailerModalProps = {
  movieId: number;
  movieTitle: string;
  trailerUrl?: string | null;
  movieYear?: number;
  onClose: () => void;
};

function getYouTubeId(url: string): string | null {
  const patterns = [
    /[?&]v=([^&#]+)/,
    /youtu\.be\/([^?#]+)/,
    /\/embed\/([^?#]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

export default function TrailerModal({ movieId, movieTitle, trailerUrl, movieYear, onClose }: TrailerModalProps) {
  const { bg, accent } = getPosterColors(movieId);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const isRgb = accent === '#E7AB79' ? '231,171,121' : '150,150,150';
  const ytId = trailerUrl ? getYouTubeId(trailerUrl) : null;
  const isDirectVideo = trailerUrl && !ytId && /\.(mp4|webm|ogg)(\?|$)/i.test(trailerUrl);

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'overlayIn 0.25s ease', backdropFilter: 'blur(6px)' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ width: 'min(820px, 92vw)', animation: 'scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>
        <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative', background: bg, overflow: 'hidden', border: '1px solid var(--border2)' }}>

          {/* YouTube embed */}
          {ytId && (
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            />
          )}

          {/* Direct video */}
          {isDirectVideo && (
            <video
              src={trailerUrl!}
              autoPlay
              controls
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#000' }}
            />
          )}

          {/* Placeholder when no URL */}
          {!ytId && !isDirectVideo && (
            <>
              <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="tr-stripe" width="32" height="32" patternTransform="rotate(40)">
                    <line x1="0" y1="0" x2="0" y2="32" stroke={accent} strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tr-stripe)" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 50%, ${bg}44 0%, ${bg}cc 70%)` }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20 }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', border: `1.5px solid ${accent}`, animation: 'pulse-ring 1.8s ease-out infinite', opacity: 0.5 }} />
                  <div style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', border: `1.5px solid ${accent}`, animation: 'pulse-ring 1.8s ease-out 0.6s infinite', opacity: 0.5 }} />
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: `rgba(${isRgb},0.15)`, border: `1.5px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polygon points="6,3 16,9 6,15" fill={accent} /></svg>
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 22, fontWeight: 700, color: accent, textAlign: 'center', marginBottom: 6 }}>{movieTitle}</div>
                  <div style={{ fontSize: 8, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textAlign: 'center', fontWeight: 500 }}>
                    No trailer available{movieYear ? ` — ${movieYear}` : ''}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderTop: 'none', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 14, color: 'var(--text-muted)' }}>
            {movieTitle}{movieYear ? ` (${movieYear})` : ''}
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, transition: 'color 0.2s', fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.color = 'var(--text)'; }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.color = 'var(--text-muted)'; }}
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}
