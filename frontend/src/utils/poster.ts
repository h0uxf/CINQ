export const POSTER_PALETTE = [
  { bg: '#0c0904', accent: '#E7AB79' },
  { bg: '#04060c', accent: '#7fa8c8' },
  { bg: '#0c0404', accent: '#c87070' },
  { bg: '#06040c', accent: '#9088c8' },
  { bg: '#0c0902', accent: '#c8a040' },
  { bg: '#090909', accent: '#a0a0a0' },
] as const;

export function getPosterColors(id: number) {
  return POSTER_PALETTE[Math.abs(id) % POSTER_PALETTE.length];
}
