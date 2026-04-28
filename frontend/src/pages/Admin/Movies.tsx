import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAllMoviesAdmin,
  createMovieAdmin,
  updateMovieAdmin,
  toggleMovieActive,
  deleteMovieAdmin,
  getGenres,
  type AdminMovie,
} from '../../api/admin';
import Btn from '../../components/Btn';

const EMPTY_FORM = { title: '', description: '', durationMinutes: '', posterUrl: '', trailerUrl: '', genreIds: [] as number[] };

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', padding: '32px', width: '100%', maxWidth: 540, maxHeight: '90vh', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, fontStyle: 'italic', color: 'var(--text)' }}>{title}</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 20, lineHeight: 1 }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 500 }}>{label}</div>
      {children}
    </div>
  );
}

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
    <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Movies() {
  const qc = useQueryClient();
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<AdminMovie | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const { data: movies = [], isLoading } = useQuery({ queryKey: ['admin-movies'], queryFn: getAllMoviesAdmin });
  const { data: genres = [] } = useQuery({ queryKey: ['admin-genres'], queryFn: getGenres });

  const invalidate = () => qc.invalidateQueries({ queryKey: ['admin-movies'] });

  const createMut = useMutation({
    mutationFn: createMovieAdmin,
    onSuccess: () => { invalidate(); setModal(null); },
  });

  const updateMut = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Parameters<typeof updateMovieAdmin>[1] }) =>
      updateMovieAdmin(id, data),
    onSuccess: () => { invalidate(); setModal(null); },
  });

  const toggleMut = useMutation({
    mutationFn: ({ id, isActive }: { id: number; isActive: boolean }) => toggleMovieActive(id, isActive),
    onSuccess: invalidate,
  });

  const deleteMut = useMutation({
    mutationFn: deleteMovieAdmin,
    onSuccess: () => { invalidate(); setDeleteId(null); },
  });

  function openAdd() {
    setForm(EMPTY_FORM);
    setEditing(null);
    setModal('add');
  }

  function openEdit(m: AdminMovie) {
    setEditing(m);
    setForm({
      title: m.title,
      description: m.description,
      durationMinutes: String(m.durationMinutes),
      posterUrl: m.posterUrl ?? '',
      trailerUrl: m.trailerUrl ?? '',
      genreIds: m.genres.map(g => g.id),
    });
    setModal('edit');
  }

  function toggleGenre(id: number) {
    setForm(f => ({
      ...f,
      genreIds: f.genreIds.includes(id) ? f.genreIds.filter(g => g !== id) : [...f.genreIds, id],
    }));
  }

  function submit() {
    const payload = {
      title: form.title,
      description: form.description,
      durationMinutes: Number(form.durationMinutes),
      posterUrl: form.posterUrl || undefined,
      trailerUrl: form.trailerUrl || undefined,
      genreIds: form.genreIds,
    };
    if (modal === 'add') createMut.mutate(payload);
    else if (editing) updateMut.mutate({ id: editing.id, data: payload });
  }

  const valid = form.title.length > 0 && form.description.length > 0 && Number(form.durationMinutes) > 0;
  const busy = createMut.isPending || updateMut.isPending;

  const filtered = movies.filter(m =>
    !search ||
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    m.genres.some(g => g.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ padding: '40px 40px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>Manage</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: 'var(--text)', margin: 0 }}>Movies</h1>
        </div>
        <Btn onClick={openAdd}>+ Add Movie</Btn>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ position: 'relative', maxWidth: 320 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent)', pointerEvents: 'none', display: 'flex' }}>
            <SearchIcon />
          </span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title or genre…" style={{ paddingLeft: 36 }} />
        </div>
      </div>

      {isLoading ? (
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Loading…</p>
      ) : (
        <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
                {['Title', 'Genres', 'Duration', 'Status', 'Created', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 7, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, i) => (
                <tr key={m.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--surface)', opacity: m.isActive ? 1 : 0.5 }}>
                  <td style={{ padding: '14px 16px', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 14, color: 'var(--accent)' }}>{m.title}</td>
                  <td style={{ padding: '14px 16px', maxWidth: 180 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {m.genres.map(g => (
                        <span key={g.id} style={{ fontSize: 7, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '2px 6px' }}>{g.name}</span>
                      ))}
                      {m.genres.length === 0 && <span style={{ fontSize: 9, color: 'var(--text-sub)' }}>—</span>}
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 11, color: 'var(--text-muted)' }}>{m.durationMinutes} min</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500, color: m.isActive ? '#4caf7d' : 'var(--text-muted)', border: `1px solid ${m.isActive ? '#4caf7d' : 'var(--border)'}`, padding: '2px 7px' }}>
                      {m.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 10, color: 'var(--text-muted)' }}>
                    {new Date(m.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      <button onClick={() => openEdit(m)} style={{ background: 'none', border: '1px solid var(--border2)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>Edit</button>
                      <button onClick={() => toggleMut.mutate({ id: m.id, isActive: !m.isActive })} style={{ background: 'none', border: '1px solid var(--border2)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: m.isActive ? '#c87070' : '#4caf7d', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>
                        {m.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                      <button onClick={() => setDeleteId(m.id)} style={{ background: 'none', border: '1px solid rgba(200,112,112,0.3)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c87070', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>No movies found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {(modal === 'add' || modal === 'edit') && (
        <Modal title={modal === 'add' ? 'Add Movie' : 'Edit Movie'} onClose={() => setModal(null)}>
          <Field label="Title">
            <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Movie title" />
          </Field>
          <Field label="Description">
            <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Synopsis…" rows={4} />
          </Field>
          <Field label="Duration (minutes)">
            <input type="number" value={form.durationMinutes} onChange={e => setForm(f => ({ ...f, durationMinutes: e.target.value }))} placeholder="120" />
          </Field>
          <Field label="Poster URL (optional)">
            <input value={form.posterUrl} onChange={e => setForm(f => ({ ...f, posterUrl: e.target.value }))} placeholder="https://…" />
          </Field>
          <Field label="Trailer URL (optional)">
            <input value={form.trailerUrl} onChange={e => setForm(f => ({ ...f, trailerUrl: e.target.value }))} placeholder="https://youtube.com/…" />
          </Field>
          {genres.length > 0 && (
            <Field label="Genres">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {genres.map(g => {
                  const sel = form.genreIds.includes(g.id);
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => toggleGenre(g.id)}
                      style={{
                        background: sel ? 'var(--accent-dim)' : 'var(--surface3)',
                        border: `1px solid ${sel ? 'var(--accent)' : 'var(--border2)'}`,
                        color: sel ? 'var(--accent)' : 'var(--text-muted)',
                        padding: '5px 12px',
                        fontSize: 9,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif",
                        transition: 'all 0.15s',
                      }}
                    >
                      {g.name}
                    </button>
                  );
                })}
              </div>
            </Field>
          )}
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <Btn onClick={submit} disabled={!valid || busy} style={{ flex: 1 }}>
              {busy ? 'Saving…' : modal === 'add' ? 'Add Movie' : 'Save Changes'}
            </Btn>
            <Btn variant="ghost" onClick={() => setModal(null)}>Cancel</Btn>
          </div>
          {(createMut.error || updateMut.error) && (
            <p style={{ fontSize: 10, color: '#c87070', marginTop: 12 }}>
              {((createMut.error || updateMut.error) as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'An error occurred'}
            </p>
          )}
        </Modal>
      )}

      {deleteId !== null && (
        <Modal title="Delete Movie?" onClose={() => setDeleteId(null)}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 24 }}>This will permanently delete the movie. Existing bookings are not affected.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn onClick={() => deleteMut.mutate(deleteId!)} style={{ flex: 1, background: '#c87070', borderColor: '#c87070' }} disabled={deleteMut.isPending}>
              {deleteMut.isPending ? 'Deleting…' : 'Delete'}
            </Btn>
            <Btn variant="ghost" onClick={() => setDeleteId(null)}>Cancel</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}
