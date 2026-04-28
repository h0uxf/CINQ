import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAdminUsers, updateUserRole, toggleUserActive, deleteUser, type AdminUser } from '../../api/admin';
import Btn from '../../components/Btn';

const ROLE_COLOR: Record<string, string> = {
  ADMIN: '#E7AB79',
  MANAGER: '#7fa8c8',
  USER: '#7a6d5a',
};

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', padding: '32px', width: '100%', maxWidth: 440 }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, fontStyle: 'italic', color: 'var(--text)' }}>{title}</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 20, lineHeight: 1 }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
    <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Users() {
  const qc = useQueryClient();
  const [deleteTarget, setDeleteTarget] = useState<AdminUser | null>(null);
  const [search, setSearch] = useState('');

  const { data: users = [], isLoading } = useQuery({ queryKey: ['admin-users'], queryFn: getAdminUsers });

  const invalidate = () => qc.invalidateQueries({ queryKey: ['admin-users'] });

  const roleMut = useMutation({
    mutationFn: ({ id, role }: { id: number; role: string }) => updateUserRole(id, role),
    onSuccess: invalidate,
  });

  const toggleMut = useMutation({
    mutationFn: (id: number) => toggleUserActive(id),
    onSuccess: invalidate,
  });

  const deleteMut = useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => { invalidate(); setDeleteTarget(null); },
  });

  const filtered = users.filter(u =>
    !search ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  const errMsg = (e: unknown) => (e as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'An error occurred';

  return (
    <div style={{ padding: '40px 40px 60px' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>Manage</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: 'var(--text)', margin: 0 }}>Users</h1>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ position: 'relative', maxWidth: 320 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent)', pointerEvents: 'none', display: 'flex' }}>
            <SearchIcon />
          </span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, username, or email…" style={{ paddingLeft: 36 }} />
        </div>
      </div>

      {isLoading ? (
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Loading…</p>
      ) : (
        <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
                {['User', 'Email', 'Role', 'Status', 'Bookings', 'Joined', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 7, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => {
                const displayName = `${u.firstName} ${u.lastName}`.trim() || u.username;
                return (
                  <tr key={u.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--surface)', opacity: u.isActive ? 1 : 0.55 }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>{displayName}</div>
                      <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 1, marginTop: 2 }}>@{u.username}</div>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 11, color: 'var(--text-muted)' }}>{u.email}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <select
                        value={u.role}
                        onChange={e => roleMut.mutate({ id: u.id, role: e.target.value })}
                        style={{
                          background: 'var(--surface2)',
                          border: `1px solid ${ROLE_COLOR[u.role] ?? 'var(--border)'}`,
                          color: ROLE_COLOR[u.role] ?? 'var(--text-muted)',
                          padding: '4px 8px',
                          fontSize: 9,
                          letterSpacing: 1.5,
                          textTransform: 'uppercase',
                          fontFamily: "'DM Sans', sans-serif",
                          cursor: 'pointer',
                          appearance: 'none',
                          width: 'auto',
                        }}
                      >
                        <option value="USER">User</option>
                        <option value="MANAGER">Manager</option>
                        <option value="ADMIN">Admin</option>
                      </select>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, color: u.isActive ? '#4caf7d' : '#c87070', border: `1px solid ${u.isActive ? '#4caf7d' : '#c87070'}`, padding: '2px 7px', opacity: 0.85 }}>
                        {u.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 12, color: 'var(--text)', fontFamily: "'Playfair Display', serif" }}>{u._count.bookings}</td>
                    <td style={{ padding: '12px 16px', fontSize: 10, color: 'var(--text-muted)' }}>
                      {new Date(u.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <button
                          onClick={() => toggleMut.mutate(u.id)}
                          disabled={toggleMut.isPending}
                          style={{ background: 'none', border: `1px solid ${u.isActive ? 'rgba(200,112,112,0.3)' : 'rgba(76,175,125,0.3)'}`, cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: u.isActive ? '#c87070' : '#4caf7d', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {u.isActive ? 'Deactivate' : 'Activate'}
                        </button>
                        <button onClick={() => setDeleteTarget(u)} style={{ background: 'none', border: '1px solid rgba(200,112,112,0.3)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c87070', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>No users found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {deleteTarget && (
        <Modal title="Delete User?" onClose={() => setDeleteTarget(null)}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
            Permanently delete <strong style={{ color: 'var(--text)' }}>{deleteTarget.email}</strong>?
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 24 }}>
            Their bookings and history will also be removed. This cannot be undone.
          </p>
          {deleteMut.isError && <p style={{ fontSize: 10, color: '#c87070', marginBottom: 12 }}>{errMsg(deleteMut.error)}</p>}
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn onClick={() => deleteMut.mutate(deleteTarget.id)} style={{ flex: 1, background: '#c87070', borderColor: '#c87070' }} disabled={deleteMut.isPending}>
              {deleteMut.isPending ? 'Deleting…' : 'Delete User'}
            </Btn>
            <Btn variant="ghost" onClick={() => setDeleteTarget(null)}>Cancel</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}
