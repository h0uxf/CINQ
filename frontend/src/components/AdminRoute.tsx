import { Navigate } from 'react-router-dom';
import { getToken } from '../auth/token';

function getRole(): string | null {
  const token = getToken();
  if (!token) return null;
  try {
    return JSON.parse(atob(token.split('.')[1])).role;
  } catch {
    return null;
  }
}

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const role = getRole();
  if (!['ADMIN', 'MANAGER'].includes(role ?? '')) return <Navigate to="/" replace />;
  return <>{children}</>;
}
