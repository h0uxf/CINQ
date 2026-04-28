const N = 21;

function seededBits(seed: string): boolean[] {
  let state = 0x12345678;
  for (let i = 0; i < seed.length; i++) {
    state = (Math.imul(state ^ seed.charCodeAt(i), 0x9e3779b1)) | 0;
  }
  const bits: boolean[] = [];
  for (let i = 0; i < N * N; i++) {
    state = Math.imul(state ^ (state >>> 13), 0x45d9f3b) | 0;
    state ^= state >>> 7;
    bits.push((state & 1) === 1);
  }
  return bits;
}

function finder(r: number, c: number): boolean {
  if (r === 0 || r === 6 || c === 0 || c === 6) return true;
  if (r >= 2 && r <= 4 && c >= 2 && c <= 4) return true;
  return false;
}

function moduleValue(r: number, c: number, bits: boolean[]): boolean {
  // Top-left reserved (rows 0-7, cols 0-7)
  if (r <= 7 && c <= 7) return (r <= 6 && c <= 6) ? finder(r, c) : false;
  // Top-right reserved (rows 0-7, cols 13-20)
  if (r <= 7 && c >= 13) return (r <= 6 && c >= 14) ? finder(r, c - 14) : false;
  // Bottom-left reserved (rows 13-20, cols 0-7)
  if (r >= 13 && c <= 7) return (r >= 14 && c <= 6) ? finder(r - 14, c) : false;
  // Timing patterns
  if (r === 6) return c % 2 === 0;
  if (c === 6) return r % 2 === 0;
  // Data area — deterministic from seed
  return bits[r * N + c];
}

type Props = { value: string; size?: number; color?: string };

export default function QRCode({ value, size = 126, color = '#E7AB79' }: Props) {
  const bits = seededBits(value);
  const m = size / N;
  const cells: number[] = [];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (moduleValue(r, c, bits)) cells.push(r * N + c);
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {cells.map(idx => {
        const r = Math.floor(idx / N), c = idx % N;
        return <rect key={idx} x={c * m} y={r * m} width={m} height={m} fill={color} />;
      })}
    </svg>
  );
}
