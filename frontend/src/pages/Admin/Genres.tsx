import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getGenres, createGenre, updateGenre, deleteGenre, type Genre } from '../../api/admin';
import Btn from '../../components/Btn';

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', padding: '32px', width: '100%', maxWidth: 400 }}
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

export default function Genres() {
  const qc = useQueryClient();
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<Genre | null>(null);
  const [name, setName] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<Genre | null>(null);
  const [search, setSearch] = useState('');

  const { data: genres = [], isLoading } = useQuery({ queryKey: ['admin-genres'], queryFn: getGenres });

  const invalidate = () => qc.invalidateQueries({ queryKey: ['admin-genres'] });

  const createMut = useMutation({
    mutationFn: (n: string) => createGenre(n),
    onSuccess: () => { invalidate(); setModal(null); setName(''); },
  });

  const updateMut = useMutation({
    mutationFn: ({ id, n }: { id: number; n: string }) => updateGenre(id, n),
    onSuccess: () => { invalidate(); setModal(null); setName(''); },
  });

  const deleteMut = useMutation({
    mutationFn: (id: number) => deleteGenre(id),
    onSuccess: () => { invalidate(); setDeleteTarget(null); },
  });

  function openAdd() {
    setName('');
    setEditing(null);
    setModal('add');
  }

  function openEdit(g: Genre) {
    setEditing(g);
    setName(g.name);
    setModal('edit');
  }

  function submit() {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (modal === 'add') createMut.mutate(trimmed);
    else if (editing) updateMut.mutate({ id: editing.id, n: trimmed });
  }

  const busy = createMut.isPending || updateMut.isPending;
  const errMsg = (e: unknown) => (e as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'An error occurred';

  const filtered = genres.filter(g => !search || g.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: '40px 40px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>Manage</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: 'var(--text)', margin: 0 }}>Genres</h1>
        </div>
        <Btn onClick={openAdd}>+ Add Genre</Btn>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ position: 'relative', maxWidth: 280 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent)', pointerEvents: 'none', display: 'flex' }}>
            <SearchIcon />
          </span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search genres…" style={{ paddingLeft: 36 }} />
        </div>
      </div>

      {isLoading ? (
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Loading…</p>
      ) : (
        <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
                {['Genre', 'Movies', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 7, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((g, i) => (
                <tr key={g.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--surface)' }}>
                  <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{g.name}</td>
                  <td style={{ padding: '14px 16px', fontSize: 12, color: 'var(--text-muted)', fontFamily: "'Playfair Display', serif" }}>{g._count.movies}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => openEdit(g)} style={{ background: 'none', border: '1px solid var(--border2)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>Edit</button>
                      <button onClick={() => setDeleteTarget(g)} style={{ background: 'none', border: '1px solid rgba(200,112,112,0.3)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c87070', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={3} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>No genres found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {(modal === 'add' || modal === 'edit') && (
        <Modal title={modal === 'add' ? 'Add Genre' : 'Edit Genre'} onClose={() => setModal(null)}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 500 }}>Name</div>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Thriller"
              onKeyDown={e => e.key === 'Enter' && !busy && name.trim() && submit()}
              autoFocus
            />
          </div>
          {(createMut.isError || updateMut.isError) && (
            <p style={{ fontSize: 10, color: '#c87070', marginBottom: 12 }}>{errMsg(createMut.error || updateMut.error)}</p>
          )}
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn onClick={submit} disabled={!name.trim() || busy} style={{ flex: 1 }}>
              {busy ? 'Saving…' : modal === 'add' ? 'Add Genre' : 'Save Changes'}
            </Btn>
            <Btn variant="ghost" onClick={() => setModal(null)}>Cancel</Btn>
          </div>
        </Modal>
      )}

      {deleteTarget && (
        <Modal title="Delete Genre?" onClose={() => setDeleteTarget(null)}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
            Delete <strong style={{ color: 'var(--text)' }}>{deleteTarget.name}</strong>?
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 24 }}>
            It will be removed from all movies. This cannot be undone.
          </p>
          {deleteMut.isError && <p style={{ fontSize: 10, color: '#c87070', marginBottom: 12 }}>{errMsg(deleteMut.error)}</p>}
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn onClick={() => deleteMut.mutate(deleteTarget.id)} style={{ flex: 1, background: '#c87070', borderColor: '#c87070' }} disabled={deleteMut.isPending}>
              {deleteMut.isPending ? 'Deleting…' : 'Delete Genre'}
            </Btn>
            <Btn variant="ghost" onClick={() => setDeleteTarget(null)}>Cancel</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}
