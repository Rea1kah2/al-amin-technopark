import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { beritaAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, ArrowLeft, X, FileImage, AlertCircle } from 'lucide-react';

const KATEGORI = ['Kegiatan', 'Inovasi', 'Pengumuman', 'Kolaborasi'];
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
const MAX_SIZE_MB = 5;

const empty = {
  judul: '',
  konten: '',
  kategori: 'Kegiatan',
  penulis: 'Al Amin Techno Park',
  diterbitkan: 'false',
  gambar: null,
};

// ── Field Input Component ─────────────────────────────────────────
const Field = ({ label, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.12em]">
      {label}{required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    {children}
  </div>
);

const inputCls = `w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800
  bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400
  focus:border-transparent focus:bg-white transition placeholder:text-gray-400`;

// ── File Validator ────────────────────────────────────────────────
function validateFile(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return 'Format file tidak didukung. Gunakan JPG, JPEG, atau PNG.';
  }
  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    return `Ukuran file melebihi ${MAX_SIZE_MB} MB. Kompres gambar terlebih dahulu.`;
  }
  return null;
}

export default function AdminBerita() {
  const [berita, setBerita]     = useState([]);
  const [modal, setModal]       = useState(false);
  const [form, setForm]         = useState(empty);
  const [editId, setEditId]     = useState(null);
  const [loading, setLoading]   = useState(false);
  const [fileError, setFileError] = useState('');
  const [preview, setPreview]   = useState(null);

  const refetch = () =>
    beritaAPI.getAllAdmin().then(r => setBerita(r.data)).catch(() => {});

  useEffect(() => { refetch(); }, []);

  const openAdd = () => {
    setForm(empty); setEditId(null);
    setFileError(''); setPreview(null);
    setModal(true);
  };

  const openEdit = (item) => {
    setForm({ ...item, diterbitkan: String(item.diterbitkan), gambar: null });
    setEditId(item.id);
    setFileError(''); setPreview(null);
    setModal(true);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const err = validateFile(file);
    if (err) {
      setFileError(err);
      setForm(f => ({ ...f, gambar: null }));
      setPreview(null);
      e.target.value = '';
      return;
    }
    setFileError('');
    setForm(f => ({ ...f, gambar: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileError) return;
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => { if (v !== null) fd.append(k, v); });
      if (editId) await beritaAPI.update(editId, fd);
      else        await beritaAPI.create(fd);
      toast.success(editId ? 'Berita berhasil diperbarui!' : 'Berita berhasil ditambahkan!');
      setModal(false); refetch();
    } catch {
      toast.error('Gagal menyimpan berita. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Hapus berita ini secara permanen?')) return;
    try {
      await beritaAPI.delete(id);
      toast.success('Berita dihapus.');
      refetch();
    } catch {
      toast.error('Gagal menghapus berita.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ─── NAVBAR ──────────────────────────────────────────────── */}
      <nav className="bg-[rgba(6,30,18,0.97)] text-white px-6 md:px-10 py-4
                      flex items-center justify-between sticky top-0 z-30 shadow-lg">
        <div className="flex items-center gap-4">
          <Link to="/admin"
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20
                       flex items-center justify-center transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-400 leading-none mb-0.5">
              Admin Panel
            </p>
            <span className="font-bold text-base">Kelola Berita</span>
          </div>
        </div>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400
                     text-white px-4 py-2.5 rounded-xl text-sm font-bold
                     transition-colors shadow-lg shadow-emerald-900/30">
          <Plus size={16} /> Tambah Berita
        </button>
      </nav>

      {/* ─── TABLE ───────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        {/* Summary bar */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500 font-medium">
            Total <span className="font-bold text-gray-800">{berita.length}</span> berita
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {['Judul', 'Kategori', 'Status', 'Tanggal', 'Aksi'].map((h, i) => (
                  <th key={h}
                    className={`px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.2em]
                                text-gray-400 ${i === 4 ? 'text-right' : 'text-left'}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {berita.map(item => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800 max-w-xs truncate">
                    {item.judul}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100
                                     px-2.5 py-1 rounded-full text-xs font-bold">
                      {item.kategori}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border
                      ${item.diterbitkan
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                      {item.diterbitkan ? 'Diterbitkan' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-xs">
                    {new Date(item.createdAt).toLocaleDateString('id-ID', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => openEdit(item)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                        title="Hapus">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {berita.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-16 text-gray-400 text-sm">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <FileImage size={20} className="text-gray-300" />
                      </div>
                      Belum ada berita — klik "Tambah Berita" untuk memulai
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── MODAL ───────────────────────────────────────────────── */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50
                        flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl
                          max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-500 mb-0.5">
                  Admin Panel
                </p>
                <h2 className="text-lg font-black text-gray-900">
                  {editId ? 'Edit Berita' : 'Tambah Berita'}
                </h2>
              </div>
              <button onClick={() => setModal(false)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200
                           flex items-center justify-center transition-colors">
                <X size={16} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5">

              <Field label="Judul Berita" required>
                <input value={form.judul}
                  onChange={e => setForm({ ...form, judul: e.target.value })}
                  placeholder="Masukkan judul berita..."
                  className={inputCls} required />
              </Field>

              <Field label="Konten / Isi Berita" required>
                <textarea value={form.konten}
                  onChange={e => setForm({ ...form, konten: e.target.value })}
                  placeholder="Tulis isi berita di sini..."
                  rows={5} className={`${inputCls} resize-none`} required />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Kategori">
                  <select value={form.kategori}
                    onChange={e => setForm({ ...form, kategori: e.target.value })}
                    className={inputCls}>
                    {KATEGORI.map(k => <option key={k}>{k}</option>)}
                  </select>
                </Field>
                <Field label="Status Publikasi">
                  <select value={form.diterbitkan}
                    onChange={e => setForm({ ...form, diterbitkan: e.target.value })}
                    className={inputCls}>
                    <option value="true">Diterbitkan</option>
                    <option value="false">Simpan sebagai Draft</option>
                  </select>
                </Field>
              </div>

              <Field label="Penulis">
                <input value={form.penulis}
                  onChange={e => setForm({ ...form, penulis: e.target.value })}
                  className={inputCls} />
              </Field>

              {/* File Upload */}
              <Field label="Gambar Berita">
                <div className={`rounded-xl border-2 border-dashed transition-colors overflow-hidden
                                 ${fileError ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50/30'}`}>
                  {/* Info bar */}
                  <div className="px-4 py-2 border-b border-dashed border-current/10
                                  flex items-center gap-2 bg-amber-50 border-amber-200">
                    <AlertCircle size={13} className="text-amber-500 flex-shrink-0" />
                    <p className="text-[11px] text-amber-700 font-semibold">
                      Format: JPG, JPEG, PNG — Maks. {MAX_SIZE_MB} MB
                    </p>
                  </div>
                  <div className="px-4 py-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200
                                    flex items-center justify-center flex-shrink-0">
                      <FileImage size={18} className="text-emerald-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <input type="file" accept=".jpg,.jpeg,.png"
                        onChange={handleFile}
                        className="w-full text-sm text-gray-600 cursor-pointer
                                   file:mr-3 file:py-1.5 file:px-3
                                   file:rounded-lg file:border-0
                                   file:text-xs file:font-bold
                                   file:bg-emerald-600 file:text-white
                                   file:cursor-pointer hover:file:bg-emerald-700
                                   file:transition-colors" />
                      {form.gambar && (
                        <p className="text-xs text-emerald-600 font-semibold mt-1">
                          ✓ {form.gambar.name} ({(form.gambar.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      )}
                    </div>
                    {preview && (
                      <img src={preview} alt="preview"
                        className="w-14 h-14 object-cover rounded-xl border border-gray-200 flex-shrink-0" />
                    )}
                  </div>
                </div>
                {fileError && (
                  <p className="flex items-center gap-1.5 text-xs text-red-600 font-semibold mt-1">
                    <AlertCircle size={12} /> {fileError}
                  </p>
                )}
              </Field>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setModal(false)}
                  className="flex-1 border border-gray-200 py-3 rounded-xl
                             font-bold text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  Batal
                </button>
                <button type="submit" disabled={loading || !!fileError}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700
                             disabled:opacity-50 disabled:cursor-not-allowed
                             text-white py-3 rounded-xl font-bold text-sm
                             transition-colors shadow-lg shadow-emerald-600/20">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Menyimpan...
                    </span>
                  ) : editId ? 'Simpan Perubahan' : 'Tambah Berita'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}