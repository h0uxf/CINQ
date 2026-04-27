import { getPosterColors } from '../utils/poster';

type PosterProps = {
  movieId: number;
  title: string;
  posterUrl?: string | null;
  height?: number;
  showTitle?: boolean;
  rating?: string;
};

export default function Poster({
  movieId,
  title,
  posterUrl,
  height = 280,
  showTitle = true,
  rating,
}: PosterProps) {
  const { bg, accent } = getPosterColors(movieId);
  const pid = `p${movieId}`;

  if (posterUrl) {
    return (
      <div style={{ width: '100%', height, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={posterUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(170deg,transparent 20%,${bg}bb 65%,${bg} 100%)` }} />
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height, background: bg, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={pid} width="22" height="22" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="22" stroke={accent} strokeWidth="1" strokeOpacity="0.13" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(170deg,transparent 20%,${bg}bb 65%,${bg} 100%)` }} />
      {showTitle && (
        <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 15, fontWeight: 600, color: accent, lineHeight: 1.2, textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
          {title}
        </div>
      )}
      {rating && (
        <div style={{ position: 'absolute', top: 10, right: 10, fontSize: 8, letterSpacing: 2, fontWeight: 500, color: accent, opacity: 0.55, textTransform: 'uppercase' }}>
          {rating}
        </div>
      )}
    </div>
  );
}
