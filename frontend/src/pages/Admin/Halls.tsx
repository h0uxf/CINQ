import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAllHallsAdmin,
  createHallAdmin,
  updateHallAdmin,
  deleteHallAdmin,
  type AdminHall,
} from '../../api/admin';
import Btn from '../../components/Btn';

const ALL_ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const DEFAULT_FORM = { name: '', rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], seatsPerRow: 14 };
const PREMIUM_ROWS = new Set(['A', 'B', 'C']);

function SeatPreview({ rows, seatsPerRow }: { rows: string[]; seatsPerRow: number }) {
  if (rows.length === 0 || seatsPerRow < 1) return null;
  const n = Math.min(seatsPerRow, 30);
  const seatW = Math.max(4, Math.min(14, Math.floor(320 / (n + 2))));
  const seatH = Math.round(seatW * 0.65);

  return (
    <div style={{ marginTop: 16, padding: '16px 12px 12px', background: 'var(--bg)', border: '1px solid var(--border)', overflowX: 'auto' }}>
      {/* Screen bar */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 14, gap: 4 }}>
        <div style={{ width: '55%', height: 3, background: 'var(--accent)', opacity: 0.25, borderRadius: 2 }} />
        <div style={{ fontSize: 6, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-sub)' }}>Screen</div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
        {rows.map(row => {
          const isPrem = PREMIUM_ROWS.has(row);
          return (
            <div key={row} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 6, color: isPrem ? 'var(--accent)' : 'var(--text-sub)', width: 10, textAlign: 'right', flexShrink: 0, opacity: 0.7 }}>{row}</span>
              <div style={{ display: 'flex', gap: 2 }}>
                {Array.from({ length: n }).map((_, ci) => {
                  const addGap = ci === Math.floor(n / 2);
                  return (
                    <div key={ci} style={{ display: 'flex', alignItems: 'center' }}>
                      {addGap && <div style={{ width: seatW * 0.6 }} />}
                      <div style={{
                        width: seatW,
                        height: seatH,
                        background: isPrem ? 'rgba(231,171,121,0.15)' : 'var(--surface2)',
                        border: `1px solid ${isPrem ? 'rgba(231,171,121,0.3)' : 'var(--border)'}`,
                        borderRadius: 1,
                        flexShrink: 0,
                      }} />
                    </div>
                  );
                })}
              </div>
              <span style={{ fontSize: 6, color: isPrem ? 'var(--accent)' : 'transparent', width: 8, flexShrink: 0, opacity: 0.5 }}>P</span>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: 10, fontSize: 7, letterSpacing: 1.5, color: 'var(--text-sub)', textTransform: 'uppercase' }}>
        {rows.length} rows · {n} seats · {rows.length * n} total
        {seatsPerRow > 30 ? ` (preview capped at 30)` : ''}
      </div>
    </div>
  );
}

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
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 8, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 500 }}>{label}</div>
      {children}
    </div>
  );
}

function HallForm({
  form,
  setForm,
  onSubmit,
  onCancel,
  busy,
  submitLabel,
  error,
}: {
  form: typeof DEFAULT_FORM;
  setForm: React.Dispatch<React.SetStateAction<typeof DEFAULT_FORM>>;
  onSubmit: () => void;
  onCancel: () => void;
  busy: boolean;
  submitLabel: string;
  error?: string;
}) {
  function toggleRow(row: string) {
    setForm(f => ({
      ...f,
      rows: f.rows.includes(row) ? f.rows.filter(r => r !== row) : [...f.rows, row].sort(),
    }));
  }

  const total = form.rows.length * form.seatsPerRow;
  const valid = form.name.length > 0 && form.rows.length > 0 && form.seatsPerRow > 0;

  return (
    <>
      <Field label="Hall Name">
        <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. Hall 1, Screen A" />
      </Field>

      <Field label="Rows">
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {ALL_ROWS.map(row => {
            const active = form.rows.includes(row);
            return (
              <button
                key={row}
                onClick={() => toggleRow(row)}
                style={{
                  width: 36, height: 32,
                  background: active ? 'var(--accent)' : 'var(--surface2)',
                  border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                  color: active ? '#0c0800' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: 11, fontWeight: 600,
                  borderRadius: 3,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.12s',
                }}
              >
                {row}
              </button>
            );
          })}
        </div>
        <div style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 8, letterSpacing: 1 }}>
          Rows A–C are treated as Premium seating in the booking flow.
        </div>
      </Field>

      <Field label="Seats Per Row">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <input
            type="number"
            min={1}
            max={50}
            value={form.seatsPerRow}
            onChange={e => setForm(f => ({ ...f, seatsPerRow: Number(e.target.value) }))}
            style={{ width: 100 }}
          />
          <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 1 }}>{total} total seats</span>
        </div>
      </Field>

      <Field label="Layout Preview">
        <SeatPreview rows={form.rows} seatsPerRow={form.seatsPerRow} />
      </Field>

      {error && <p style={{ fontSize: 10, color: '#c87070', marginBottom: 12 }}>{error}</p>}

      <div style={{ display: 'flex', gap: 10 }}>
        <Btn onClick={onSubmit} disabled={!valid || busy} style={{ flex: 1 }}>
          {busy ? 'Saving…' : submitLabel}
        </Btn>
        <Btn variant="ghost" onClick={onCancel}>Cancel</Btn>
      </div>
    </>
  );
}

export default function Halls() {
  const qc = useQueryClient();
  const [modal, setModal] = useState<'add' | 'edit' | null>(null);
  const [editing, setEditing] = useState<AdminHall | null>(null);
  const [form, setForm] = useState(DEFAULT_FORM);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const { data: halls = [], isLoading } = useQuery({ queryKey: ['admin-halls'], queryFn: getAllHallsAdmin });

  const invalidate = () => qc.invalidateQueries({ queryKey: ['admin-halls'] });

  const createMut = useMutation({
    mutationFn: createHallAdmin,
    onSuccess: () => { invalidate(); setModal(null); },
  });

  const updateMut = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Parameters<typeof updateHallAdmin>[1] }) =>
      updateHallAdmin(id, data),
    onSuccess: () => { invalidate(); setModal(null); },
  });

  const deleteMut = useMutation({
    mutationFn: deleteHallAdmin,
    onSuccess: () => { invalidate(); setDeleteId(null); },
  });

  function openAdd() {
    setForm(DEFAULT_FORM);
    setEditing(null);
    setModal('add');
  }

  function openEdit(h: AdminHall) {
    setEditing(h);
    setForm({ name: h.name, rows: ALL_ROWS, seatsPerRow: Math.round(h._count.seats / ALL_ROWS.length) || 14 });
    setModal('edit');
  }

  const errMsg = (e: unknown) => (e as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'An error occurred';

  return (
    <div style={{ padding: '40px 40px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontSize: 8, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>Manage</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, fontStyle: 'italic', color: 'var(--text)', margin: 0 }}>Halls</h1>
        </div>
        <Btn onClick={openAdd}>+ Add Hall</Btn>
      </div>

      {isLoading ? (
        <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-muted)', animation: 'pulse 2s infinite' }}>Loading…</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {halls.map(h => (
            <div key={h.id} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '24px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 18, fontWeight: 700, color: 'var(--accent)', marginBottom: 12 }}>{h.name}</div>
              <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>Seats</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'var(--text)' }}>{h._count.seats}</div>
                </div>
                <div>
                  <div style={{ fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>Screenings</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'var(--text)' }}>{h._count.screenings}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => openEdit(h)} style={{ background: 'none', border: '1px solid var(--border2)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', padding: '5px 12px', fontFamily: "'DM Sans', sans-serif" }}>Configure Seats</button>
                <button onClick={() => setDeleteId(h.id)} style={{ background: 'none', border: '1px solid rgba(200,112,112,0.3)', cursor: 'pointer', fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: '#c87070', padding: '5px 12px', fontFamily: "'DM Sans', sans-serif" }}>Delete</button>
              </div>
            </div>
          ))}
          {halls.length === 0 && (
            <div style={{ gridColumn: '1/-1', padding: '60px 0', textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>No halls yet</div>
          )}
        </div>
      )}

      {modal === 'add' && (
        <Modal title="Add Hall" onClose={() => setModal(null)}>
          <HallForm
            form={form}
            setForm={setForm}
            onSubmit={() => createMut.mutate(form)}
            onCancel={() => setModal(null)}
            busy={createMut.isPending}
            submitLabel="Create Hall"
            error={createMut.isError ? errMsg(createMut.error) : undefined}
          />
        </Modal>
      )}

      {modal === 'edit' && editing && (
        <Modal title={`Configure — ${editing.name}`} onClose={() => setModal(null)}>
          <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', padding: '12px 16px', marginBottom: 24, fontSize: 10, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Reconfiguring seats will <strong style={{ color: 'var(--accent)' }}>replace all existing seats</strong> for this hall. Confirmed bookings are not affected.
          </div>
          <HallForm
            form={form}
            setForm={setForm}
            onSubmit={() => updateMut.mutate({ id: editing.id, data: form })}
            onCancel={() => setModal(null)}
            busy={updateMut.isPending}
            submitLabel="Save Configuration"
            error={updateMut.isError ? errMsg(updateMut.error) : undefined}
          />
        </Modal>
      )}

      {deleteId !== null && (
        <Modal title="Delete Hall?" onClose={() => setDeleteId(null)}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 24 }}>This cannot be undone. Halls with upcoming screenings cannot be deleted.</p>
          {deleteMut.isError && <p style={{ fontSize: 10, color: '#c87070', marginBottom: 12 }}>{errMsg(deleteMut.error)}</p>}
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn onClick={() => deleteMut.mutate(deleteId!)} style={{ flex: 1, background: '#c87070', borderColor: '#c87070' }} disabled={deleteMut.isPending}>
              {deleteMut.isPending ? 'Deleting…' : 'Delete Hall'}
            </Btn>
            <Btn variant="ghost" onClick={() => setDeleteId(null)}>Cancel</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}
