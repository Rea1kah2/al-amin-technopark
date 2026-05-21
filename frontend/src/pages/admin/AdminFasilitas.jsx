import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fasilitasAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, ArrowLeft, X, FileImage, AlertCircle, LayoutGrid } from 'lucide-react';

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
const MAX_SIZE_MB = 5;

const empty = {
  nama: '', deskripsi: '', icon: '', urutan: 0, gambar: null,
};

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

function validateFile(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return 'Format file tidak didukung. Gunakan JPG, JPEG, atau PNG.';
  }
  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    return `Ukuran file melebihi ${MAX_SIZE_MB} MB. Kompres gambar terlebih dahulu.`;
  }
  return null;
}

export default function AdminFasilitas() {
  const [fasilitas, setFasilitas] = useState([]);
  const [modal, setModal]         = useState(false);
  const [form, setForm]           = useState(empty);
  const [editId, setEditId]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [fileError, setFileError] = useState('');
  const [preview, setPreview]     = useState(null);

  const refetch = () =>
    fasilitasAPI.getAll().then(r => setFasilitas(r.data)).catch(() => {});

  useEffect(() => { refetch(); }, []);

  const openAdd = () => {
    setForm(empty); setEditId(null);
    setFileError(''); setPreview(null);
    setModal(true);
  };

  const openEdit = (item) => {
    setForm({ ...item, gambar: null });
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
      if (editId) await fasilitasAPI.update(editId, fd);
      else        await fasilitasAPI.create(fd);
      toast.success(editId ? 'Fasilitas berhasil diperbarui!' : 'Fasilitas berhasil ditambahkan!');
      setModal(false); refetch();
    } catch {
      toast.error('Gagal menyimpan fasilitas. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Hapus fasilitas ini secara permanen?')) return;
    try {
      await fasilitasAPI.delete(id);
      toast.success('Fasilitas dihapus.');
      refetch();
    } catch {
      toast.error('Gagal menghapus fasilitas.');
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
            <span className="font-bold text-base">Kelola Fasilitas</span>
          </div>
        </div>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400
                     text-white px-4 py-2.5 rounded-xl text-sm font-bold
                     transition-colors shadow-lg shadow-emerald-900/30">
          <Plus size={16} /> Tambah Fasilitas
        </button>
      </nav>

      {/* ─── GRID CARDS ──────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500 font-medium">
            Total <span className="font-bold text-gray-800">{fasilitas.length}</span> fasilitas
          </p>
        </div>

        {fasilitas.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm
                          flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
              <LayoutGrid size={22} className="text-gray-300" />
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Belum ada fasilitas — klik "Tambah Fasilitas" untuk memulai
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fasilitas.map(item => (
              <div key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
                           hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={item.gambar || 'https://placehold.co/400x200/f3f4f6/9ca3af?text=Tidak+ada+gambar'}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={e => {
                      e.target.src = 'https://placehold.co/400x200/f3f4f6/9ca3af?text=Tidak+ada+gambar';
                    }}
                  />
                  {/* Urutan badge */}
                  <div className="absolute top-3 left-3 bg-[rgba(6,30,18,0.8)] text-emerald-300
                                  text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-sm">
                    #{item.urutan}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-base mb-1 truncate">{item.nama}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.deskripsi}</p>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                    <button onClick={() => openEdit(item)}
                      className="flex-1 flex items-center justify-center gap-1.5
                                 text-xs font-bold text-blue-600 hover:bg-blue-50
                                 py-2 rounded-xl transition-colors">
                      <Pencil size={13} /> Edit
                    </button>
                    <button onClick={() => handleDelete(item.id)}
                      className="flex-1 flex items-center justify-center gap-1.5
                                 text-xs font-bold text-red-500 hover:bg-red-50
                                 py-2 rounded-xl transition-colors">
                      <Trash2 size={13} /> Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── MODAL ───────────────────────────────────────────────── */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50
                        flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg
                          max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-500 mb-0.5">
                  Admin Panel
                </p>
                <h2 className="text-lg font-black text-gray-900">
                  {editId ? 'Edit Fasilitas' : 'Tambah Fasilitas'}
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

              <Field label="Nama Fasilitas" required>
                <input value={form.nama}
                  onChange={e => setForm({ ...form, nama: e.target.value })}
                  placeholder="Contoh: Lapangan Sepak Bola"
                  className={inputCls} required />
              </Field>

              <Field label="Deskripsi" required>
                <textarea value={form.deskripsi}
                  onChange={e => setForm({ ...form, deskripsi: e.target.value })}
                  placeholder="Jelaskan fasilitas ini secara singkat..."
                  rows={4} className={`${inputCls} resize-none`} required />
              </Field>

              <Field label="Urutan Tampil">
                <input type="number" value={form.urutan}
                  onChange={e => setForm({ ...form, urutan: e.target.value })}
                  placeholder="0"
                  className={inputCls} />
                <p className="text-[11px] text-gray-400">
                  Angka kecil tampil lebih awal. Contoh: 1 tampil sebelum 2.
                </p>
              </Field>

              {/* File Upload */}
              <Field label="Gambar Fasilitas">
                <div className={`rounded-xl border-2 border-dashed transition-colors overflow-hidden
                                 ${fileError ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50/30'}`}>
                  {/* Info bar */}
                  <div className="px-4 py-2 border-b border-dashed border-current/10
                                  flex items-center gap-2 bg-amber-50">
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
                  ) : editId ? 'Simpan Perubahan' : 'Tambah Fasilitas'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}