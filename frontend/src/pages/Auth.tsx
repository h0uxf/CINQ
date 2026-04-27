import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { api } from '../api/client';
import { setToken } from '../auth/token';
import { useResponsive } from '../hooks/useResponsive';

type AuthProps = {
  defaultMode?: 'login' | 'signup';
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
      {children}
    </div>
  );
}

export default function Auth({ defaultMode = 'login' }: AuthProps) {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [form, setForm] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const isSignup = mode === 'signup';

  function update(k: string, v: string) {
    setForm(f => ({ ...f, [k]: v }));
    setError('');
  }

  function switchMode(m: 'login' | 'signup') {
    setMode(m);
    setForm({ firstName: '', lastName: '', username: '', email: '', password: '', confirm: '' });
    setError('');
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSignup) {
      if (!form.firstName.trim()) { setError('Please enter your first name.'); return; }
      if (!form.email.includes('@')) { setError('Please enter a valid email.'); return; }
      if (form.password.length < 6) { setError('Password must be at least 6 characters.'); return; }
      if (form.password !== form.confirm) { setError('Passwords do not match.'); return; }
    } else {
      if (!form.email.includes('@')) { setError('Please enter a valid email.'); return; }
      if (!form.password) { setError('Please enter your password.'); return; }
    }

    try {
      setLoading(true);
      if (isSignup) {
        const res = await api.post('/auth/register', {
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username || form.email.split('@')[0],
          email: form.email,
          password: form.password,
        });
        setToken(res.data.token);
      } else {
        const res = await login({ email: form.email, password: form.password });
        setToken(res.token);
      }
      navigate('/');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      const axiosMsg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
      setError(axiosMsg || msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
      {/* ── Left cinematic panel ─────────────────────────── */}
      {!isMobile && (
        <div style={{ position: 'relative', overflow: 'hidden', background: '#090605', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '48px 56px' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.14 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="auth-s" width="36" height="36" patternTransform="rotate(38)">
                <line x1="0" y1="0" x2="0" y2="36" stroke="#E7AB79" strokeWidth="1.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#auth-s)" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(231,171,121,0.07) 0%, transparent 65%), linear-gradient(135deg, rgba(9,6,5,0.6) 0%, transparent 60%)' }} />

          <button onClick={() => navigate('/')} style={{ position: 'relative', zIndex: 1, background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, letterSpacing: 8, color: '#ede0c8', textTransform: 'uppercase' }}>CINQ</span>
          </button>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: 32, height: 1, background: '#E7AB79', marginBottom: 24, opacity: 0.6 }} />
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(26px,2.8vw,40px)', fontWeight: 900, lineHeight: 1.1, color: '#ede0c8', marginBottom: 20, letterSpacing: -0.5 }}>
              Cinema,<br />elevated.
            </p>
            <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: 'rgba(237,224,200,0.5)', maxWidth: 300 }}>
              Book tickets, choose your seats, and experience film the way it was meant to be seen.
            </p>
          </div>

          {/* Decorative grid */}
          <div style={{ position: 'absolute', bottom: 0, right: 0, display: 'flex', flexDirection: 'column', gap: 2, opacity: 0.1 }}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} style={{ width: 48, height: 32, border: '1px solid #E7AB79', background: i % 3 === 0 ? 'rgba(231,171,121,0.15)' : 'transparent' }} />
            ))}
          </div>
        </div>
      )}

      {/* ── Right form panel ─────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '80px 24px 60px' : '60px 56px', background: 'var(--bg)' }}>
        <div style={{ width: '100%', maxWidth: 380 }}>
          {isMobile && (
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
              ← Home
            </button>
          )}

          {/* Mode toggle */}
          <div style={{ display: 'flex', border: '1px solid var(--border)', marginBottom: 36, overflow: 'hidden' }}>
            {(['login', 'signup'] as const).map(m => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                style={{ flex: 1, padding: '11px', fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', background: mode === m ? 'var(--accent)' : 'transparent', color: mode === m ? '#0c0800' : 'var(--text-muted)', border: 'none', transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
              >
                {m === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 26, fontWeight: 700, marginBottom: 6, letterSpacing: -0.3, color: 'var(--text)' }}>
            {isSignup ? 'Join CINQ' : 'Welcome back'}
          </h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 300, marginBottom: 28, lineHeight: 1.6 }}>
            {isSignup ? 'Create your account to start booking.' : 'Sign in to continue.'}
          </p>

          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {isSignup && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, animation: 'pageIn 0.3s cubic-bezier(0.22,1,0.36,1)' }}>
                <div>
                  <FieldLabel>First Name</FieldLabel>
                  <input type="text" value={form.firstName} onChange={e => update('firstName', e.target.value)} placeholder="John" autoComplete="given-name" />
                </div>
                <div>
                  <FieldLabel>Last Name</FieldLabel>
                  <input type="text" value={form.lastName} onChange={e => update('lastName', e.target.value)} placeholder="Doe" autoComplete="family-name" />
                </div>
              </div>
            )}
            {isSignup && (
              <div style={{ animation: 'pageIn 0.3s cubic-bezier(0.22,1,0.36,1)' }}>
                <FieldLabel>Username</FieldLabel>
                <input type="text" value={form.username} onChange={e => update('username', e.target.value)} placeholder="johndoe" autoComplete="username" />
              </div>
            )}
            <div>
              <FieldLabel>Email</FieldLabel>
              <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" autoComplete="email" />
            </div>
            <div>
              <FieldLabel>Password</FieldLabel>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => update('password', e.target.value)}
                  placeholder={isSignup ? 'Min. 6 characters' : 'Your password'}
                  autoComplete={isSignup ? 'new-password' : 'current-password'}
                  style={{ paddingRight: 52 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(s => !s)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {showPass ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            {isSignup && (
              <div style={{ animation: 'pageIn 0.3s cubic-bezier(0.22,1,0.36,1)' }}>
                <FieldLabel>Confirm Password</FieldLabel>
                <input type={showPass ? 'text' : 'password'} value={form.confirm} onChange={e => update('confirm', e.target.value)} placeholder="Repeat password" autoComplete="new-password" />
              </div>
            )}
            {!isSignup && (
              <div style={{ textAlign: 'right', marginTop: -6 }}>
                <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                  Forgot password?
                </button>
              </div>
            )}
            {error && (
              <div style={{ fontSize: 11, color: '#c87070', padding: '10px 14px', border: '1px solid rgba(200,112,112,0.25)', background: 'rgba(200,112,112,0.06)', letterSpacing: 0.3 }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{ marginTop: 6, padding: '14px', background: loading ? 'var(--surface3)' : 'var(--accent)', color: loading ? 'var(--text-muted)' : '#0c0800', fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
            >
              {loading ? 'Please wait…' : isSignup ? 'Create Account' : 'Sign In'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              <span style={{ fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-sub)', fontWeight: 500 }}>or</span>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <button
              type="button"
              onClick={() => navigate('/listings')}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border2)'; el.style.color = 'var(--text)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-muted)'; }}
              style={{ padding: '13px', background: 'transparent', color: 'var(--text-muted)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, border: '1px solid var(--border)', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s, color 0.2s' }}
            >
              Continue as Guest
            </button>
          </form>

          <div style={{ marginTop: 28, textAlign: 'center' }}>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 300 }}>
              {isSignup ? 'Already have an account? ' : "Don't have an account? "}
            </span>
            <button
              onClick={() => switchMode(isSignup ? 'login' : 'signup')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--accent)', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}
            >
              {isSignup ? 'Sign in' : 'Join CINQ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
