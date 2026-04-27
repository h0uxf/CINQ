import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovieById } from '../api/movies';
import { getScreeningsByMovie } from '../api/screenings';
import { getPosterColors } from '../utils/poster';
import { useResponsive } from '../hooks/useResponsive';
import Btn from '../components/Btn';
import TrailerModal from '../components/TrailerModal';

type Screening = {
  id: number;
  startTime: string;
  price: number;
  hall: { name: string };
};

type DayGroup = {
  label: string;
  screenings: { id: number; time: string; price: number; hall: string }[];
};

function groupByDay(screenings: Screening[]): DayGroup[] {
  const map = new Map<string, DayGroup>();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  screenings.forEach(s => {
    const dt = new Date(s.startTime);
    const d = new Date(dt);
    d.setHours(0, 0, 0, 0);

    let label: string;
    if (d.getTime() === today.getTime()) label = 'Today';
    else if (d.getTime() === tomorrow.getTime()) label = 'Tomorrow';
    else label = dt.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' });

    if (!map.has(label)) map.set(label, { label, screenings: [] });
    map.get(label)!.screenings.push({
      id: s.id,
      time: dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: s.price,
      hall: s.hall.name,
    });
  });

  return Array.from(map.values());
}

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const px = isMobile ? '24px' : '80px';

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedScreeningId, setSelectedScreeningId] = useState<number | null>(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const { data: movie } = useQuery({ queryKey: ['movie', id], queryFn: () => getMovieById(id!) });
  const { data: screeningsRaw, isLoading: screeningsLoading } = useQuery({ queryKey: ['screenings', id], queryFn: () => getScreeningsByMovie(id!) });

  if (!movie) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 64 }}>
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading…</p>
      </div>
    );
  }

  const { bg, accent } = getPosterColors(movie.id);
  const dayGroups: DayGroup[] = screeningsRaw ? groupByDay(screeningsRaw) : [];
  const activeDay = selectedDay ?? dayGroups[0]?.label ?? null;
  const activeDayGroup = dayGroups.find(d => d.label === activeDay);

  function proceed() {
    if (!selectedScreeningId || !selectedTime || !activeDay) return;
    navigate(`/screening/${selectedScreeningId}`, {
      state: {
        movie: { id: movie.id, title: movie.title, posterUrl: movie.posterUrl },
        day: activeDay,
        time: selectedTime,
        price: activeDayGroup?.screenings.find(s => s.id === selectedScreeningId)?.price ?? 0,
      },
    });
  }

  return (
    <div className="page-in" style={{ paddingTop: 64 }}>
      {showTrailer && (
        <TrailerModal movieId={movie.id} movieTitle={movie.title} onClose={() => setShowTrailer(false)} />
      )}

      {/* Hero strip */}
      <div style={{ height: isMobile ? 220 : 320, position: 'relative', overflow: 'hidden', background: movie.posterUrl ? '#000' : bg }}>
        {movie.posterUrl ? (
          <img src={movie.posterUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        ) : (
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="det-s" width="30" height="30" patternTransform="rotate(40)">
                <line x1="0" y1="0" x2="0" y2="30" stroke={accent} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#det-s)" />
          </svg>
        )}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 30%, var(--bg) 100%)` }} />

        <div style={{ position: 'absolute', bottom: isMobile ? 32 : 48, left: px, right: px, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 28 : 'clamp(32px,4.5vw,60px)', fontWeight: 900, fontStyle: 'italic', letterSpacing: -0.5, color: accent }}>
              {movie.title}
            </h1>
          </div>
          <button
            onClick={() => setShowTrailer(true)}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(0,0,0,0.75)'; el.style.borderColor = accent; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(0,0,0,0.5)'; el.style.borderColor = `${accent}44`; }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(0,0,0,0.5)', border: `1px solid ${accent}44`, cursor: 'pointer', padding: '10px 18px', color: accent, transition: 'background 0.2s, border-color 0.2s', backdropFilter: 'blur(4px)', flexShrink: 0 }}
          >
            <div style={{ width: 24, height: 24, borderRadius: '50%', border: `1px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><polygon points="2,1 7,4 2,7" fill={accent} /></svg>
            </div>
            <span style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Trailer</span>
          </button>
        </div>
        <button onClick={() => navigate('/listings')} style={{ position: 'absolute', top: 24, left: px, background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
          ← Back
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: `0 ${px} 80px`, display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 360px', gap: isTablet ? 40 : 72, alignItems: 'start' }}>
        {/* Info column */}
        <div>
          <div style={{ display: 'flex', gap: isMobile ? 14 : 24, paddingTop: 32, borderBottom: '1px solid var(--border)', paddingBottom: 28, marginBottom: 28, flexWrap: 'wrap' }}>
            {movie.durationMinutes && (
              <div>
                <div style={{ fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Duration</div>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 400 }}>{movie.durationMinutes} min</div>
              </div>
            )}
          </div>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'var(--text-muted)' }}>{movie.description}</p>
        </div>

        {/* Showtimes column */}
        <div style={{ paddingTop: 32 }}>
          <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20, fontWeight: 500 }}>Select Showtime</div>

          {screeningsLoading && (
            <p style={{ fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading times…</p>
          )}

          {!screeningsLoading && dayGroups.length === 0 && (
            <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>No screenings scheduled.</p>
          )}

          {dayGroups.length > 0 && (
            <>
              {/* Day tabs */}
              <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                {dayGroups.map(dg => (
                  <button
                    key={dg.label}
                    onClick={() => { setSelectedDay(dg.label); setSelectedTime(null); setSelectedScreeningId(null); }}
                    style={{ flex: 1, padding: '10px 6px', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', background: activeDay === dg.label ? 'var(--accent-dim)' : 'transparent', border: '1px solid', borderColor: activeDay === dg.label ? 'var(--accent-mid)' : 'var(--border)', color: activeDay === dg.label ? 'var(--accent)' : 'var(--text-muted)', transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {dg.label}
                  </button>
                ))}
              </div>

              {/* Time grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 28 }}>
                {activeDayGroup?.screenings.map(s => (
                  <button
                    key={s.id}
                    onClick={() => { setSelectedTime(s.time); setSelectedScreeningId(s.id); }}
                    style={{ padding: '12px', fontSize: 12, letterSpacing: 1, cursor: 'pointer', background: selectedScreeningId === s.id ? 'var(--accent)' : 'var(--surface2)', border: '1px solid', borderColor: selectedScreeningId === s.id ? 'var(--accent)' : 'var(--border)', color: selectedScreeningId === s.id ? '#0c0800' : 'var(--text)', transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.time}
                  </button>
                ))}
              </div>

              {/* Price info */}
              {activeDayGroup && activeDayGroup.screenings.length > 0 && (
                <div style={{ marginBottom: 24, padding: '16px', background: 'var(--surface2)', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 1 }}>Standard</span>
                    <span style={{ fontSize: 12, color: 'var(--text)' }}>£{activeDayGroup.screenings[0].price}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 1 }}>Premium (A–C)</span>
                    <span style={{ fontSize: 12, color: 'var(--accent)' }}>£{Math.round(activeDayGroup.screenings[0].price * 1.43)}</span>
                  </div>
                </div>
              )}

              <Btn onClick={proceed} disabled={!selectedScreeningId} style={{ width: '100%' }}>
                Select Seats{selectedTime ? ` — ${selectedTime}` : ''}
              </Btn>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
