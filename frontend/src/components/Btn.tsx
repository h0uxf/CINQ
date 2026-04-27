import { useState } from 'react';

type BtnProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'plain';
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function Btn({
  children,
  variant = 'primary',
  onClick,
  style = {},
  disabled = false,
  type = 'button',
}: BtnProps) {
  const [hov, setHov] = useState(false);

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '13px 32px',
    fontSize: 10,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'all 0.2s',
    opacity: disabled ? 0.4 : 1,
    ...style,
  };

  if (variant === 'primary') {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ ...base, background: hov && !disabled ? '#f0bc8c' : 'var(--accent)', color: '#0c0800' }}
      >
        {children}
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ ...base, background: 'transparent', color: 'var(--accent)', border: '1px solid', borderColor: hov && !disabled ? 'var(--accent)' : 'var(--border2)' }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, background: 'var(--surface2)', color: 'var(--text)' }}
    >
      {children}
    </button>
  );
}
