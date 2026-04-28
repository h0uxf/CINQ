import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAllScreeningsAdmin,
  createScreeningAdmin,
  updateScreeningAdmin,
  deleteScreeningAdmin,
  getAllMoviesAdmin,
  getAllHallsAdmin,
  type AdminScreening,
} from '../../api/admin';
import Btn from '../../components/Btn';

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border2)', padding: '32px', width: '100%', maxWidth: 520, maxHeight: '90vh', overflowY: 'auto' }}
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

const EMPTY_FORM = { movieId: '', hallId: '', startDate: '', startTime: '', endDate: '', endTime: '', price: '' };

function splitDatetime(iso: string): { date: string; time: string } {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return {
    date: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
    time: `${pad(d.getHours())}:${pad(d.getMinutes())}`,
  };
}

export default function Screenings() {
  const qc = useQueryClient();
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<AdminScreening | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [search, setSearch] = useState('');

  const { data: screenings = [], isLoading } = useQuery({ queryKey: ['admin-screenings'], queryFn: getAllScreeningsAdmin });
  const { data: movies = [] } = useQuery({ queryKey: ['admin-movies'], queryFn: getAllMoviesAdmin });
  const { data: halls = [] } = useQuery({ queryKey: ['admin-halls'], queryFn: getAllHallsAdmin });

  const invalidate = () => qc.invalidateQueries({ queryKey: ['admin-screenings'] });

  const createMut = useMutation({
    mutationFn: createScreeningAdmin,
    onSuccess: () => { invalidate(); setModal(null); },
  });

  const updateMut = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Parameters<typeof updateScreeningAdmin>[1] }) =>
      updateScreeningAdmin(id, data),
    onSuccess: () => { invalidate(); setModal(null); },
  });

  const deleteMut = useMutation({
    mutationFn: deleteScreeningAdmin,
    onSuccess: () => { invalidate(); setDeleteId(null); },
  });

  function openAdd() {
    setForm(EMPTY_FORM);
    setEditing(null);
    setModal('add');
  }

  function openEdit(s: AdminScreening) {
    setEditing(s);
    const start = splitDatetime(s.startTime);
    const end = splitDatetime(s.endTime);
    setForm({
      movieId: String(s.movie.id),
      hallId: String(s.hall.id),
      startDate: start.date,
      startTime: start.time,
      endDate: end.date,
      endTime: end.time,
      price: String(s.price),
    });
    setModal('edit');
  }

  function submit() {
    const startTime = `${form.startDate}T${form.startTime}`;
    const endTime = `${form.endDate}T${form.endTime}`;
    if (modal === 'add') {
      createMut.mutate({
        movieId: Number(form.movieId),
        hallId: Number(form.hallId),
        startTime,
        endTime,
        price: Number(form.price),
      });
    } else if (editing) {
      updateMut.mutate({
        id: editing.id,
        data: {
          movieId: Number(form.movieId),
          hallId: Number(form.hallId),
          startTime,
          endTime,
          price: Number(form.price),
        },
      });
    }
  }

  const now = new Date();
  const filtered = screenings.filter(s => {
    const matchFilter = filter === 'all' || (filter === 'upcoming' ? new Date(s.startTime) >= now : new Date(s.startTime) < now);
    const matchSearch = !search ||
      s.movie.title.toLowerCase().includes(search.toLowerCase()) ||
      s.hall.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const valid = form.movieId && form.hallId && form.startDate && form.startTime && form.endDate && form.endTime && Number(form.price) > 0;
  const busy = createMut.isPending || updateMut.isPending;
  const errMsg = (e: unknown) => (e as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'An error occurred';

  return (
    <div style={{ padding: '40px 40px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>Manage</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: 'var(--text)', margin: 0 }}>Screenings</h1>
        </div>
        <Btn onClick={openAdd}>+ Add Screening</Btn>
      </div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', maxWidth: 280, flex: '1 1 200px' }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--accent)', pointerEvents: 'none', display: 'flex' }}>
            <SearchIcon />
          </span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by movie or hall…" style={{ paddingLeft: 36 }} />
        </div>
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)' }}>
          {(['all', 'upcoming', 'past'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 18px',
              fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500,
              color: filter === f ? 'var(--accent)' : 'var(--text-muted)',
              borderBottom: `2px solid ${filter === f ? 'var(--accent)' : 'transparent'}`,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: -1,
            }}>{f}</button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Loading…</p>
      ) : (
        <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
                {['Movie', 'Hall', 'Date', 'Time', 'Price', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 7, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => {
                const dt = new Date(s.startTime);
                const end = new Date(s.endTime);
                const isPast = dt < now;
                return (
                  <tr key={s.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', background: 'var(--surface)', opacity: isPast ? 0.55 : 1 }}>
                    <td style={{ padding: '12px 16px', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 13, color: 'var(--accent)' }}>{s.movie.title}</td>
                    <td style={{ padding: '12px 16px', fontSize: 11, color: 'var(--text-muted)' }}>{s.hall.name}</td>
                    <td style={{ padding: '12px 16px', fontSize: 10, color: 'var(--text-muted)' }}>
                      {dt.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} – {end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 12, color: 'var(--text)', fontFamily: "'Playfair Display', serif" }}>£{s.price}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => openEdit(s)} style={{ background: 'none', border: '1px solid var(--border2)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>Edit</button>
                        <button onClick={() => setDeleteId(s.id)} style={{ background: 'none', border: '1px solid rgba(200,112,112,0.3)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c87070', padding: '4px 10px', fontFamily: "'DM Sans', sans-serif" }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr><td colSpan={6} style={{ padding: '40px 16px', textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>No screenings found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {(modal === 'add' || modal === 'edit') && (
        <Modal title={modal === 'add' ? 'Add Screening' : 'Edit Screening'} onClose={() => setModal(null)}>
          <Field label="Movie">
            <select value={form.movieId} onChange={e => setForm(f => ({ ...f, movieId: e.target.value }))}>
              <option value="">Select a movie…</option>
              {movies.filter(m => m.isActive).map(m => (
                <option key={m.id} value={m.id}>{m.title}</option>
              ))}
            </select>
          </Field>
          <Field label="Hall">
            <select value={form.hallId} onChange={e => setForm(f => ({ ...f, hallId: e.target.value }))}>
              <option value="">Select a hall…</option>
              {halls.map(h => (
                <option key={h.id} value={h.id}>{h.name} ({h._count.seats} seats)</option>
              ))}
            </select>
          </Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="Start Date">
              <input type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} />
            </Field>
            <Field label="Start Time">
              <input type="time" value={form.startTime} onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))} />
            </Field>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="End Date">
              <input type="date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} />
            </Field>
            <Field label="End Time">
              <input type="time" value={form.endTime} onChange={e => setForm(f => ({ ...f, endTime: e.target.value }))} />
            </Field>
          </div>
          <Field label="Standard Ticket Price (£)">
            <input type="number" min={1} step={0.5} value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} placeholder="14" />
          </Field>

          {(createMut.isError || updateMut.isError) && (
            <p style={{ fontSize: 10, color: '#c87070', marginBottom: 12 }}>{errMsg(createMut.error || updateMut.error)}</p>
          )}

          <div style={{ display: 'flex', gap: 10 }}>
            <Btn onClick={submit} disabled={!valid || busy} style={{ flex: 1 }}>
              {busy ? 'Saving…' : modal === 'add' ? 'Add Screening' : 'Save Changes'}
            </Btn>
            <Btn variant="ghost" onClick={() => setModal(null)}>Cancel</Btn>
          </div>
        </Modal>
      )}

      {deleteId !== null && (
        <Modal title="Delete Screening?" onClose={() => setDeleteId(null)}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 24 }}>This will permanently delete the screening. Confirmed bookings are not affected.</p>
          {deleteMut.isError && <p style={{ fontSize: 10, color: '#c87070', marginBottom: 12 }}>{errMsg(deleteMut.error)}</p>}
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
