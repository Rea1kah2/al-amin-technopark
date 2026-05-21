import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { beritaAPI } from '../services/api';

const KATEGORI = ['Semua', 'Kegiatan', 'Inovasi', 'Pengumuman', 'Kolaborasi'];

export default function Berita() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kategori, setKategori] = useState('Semua');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBerita = async () => {
    setLoading(true);
    try {
      const res = await beritaAPI.getAll({ kategori, page, limit: 6, search });
      setBerita(res.data.berita);
      setTotalPages(res.data.totalPages);
    } catch {
      setBerita([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBerita(); }, [kategori, page, search]);

  return (
    <div>
      <section className="relative h-72 bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="text-white text-3xl font-black mb-2">{t('berita.judul')}</h1>
          <p className="text-white/80 text-sm max-w-xl">{t('berita.deskripsi')}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {KATEGORI.map((k) => (
              <button key={k} onClick={() => { setKategori(k); setPage(1); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${kategori === k ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {k === 'Semua' ? t('berita.semua') : k}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder={t('berita.cari')}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-green-500 w-56" />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-72 animate-pulse" />
            ))}
          </div>
        ) : berita.length === 0 ? (
          <div className="text-center py-20 text-gray-500">Belum ada berita</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {berita.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={item.gambar || 'https://placehold.co/600x300/166534/white?text=Al+Amin'}
                  alt={item.judul} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">{item.kategori}</span>
                  <h3 className="font-bold text-gray-800 mt-3 mb-2 line-clamp-2">
                    {lang === 'en' && item.judulEn ? item.judulEn : item.judul}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {lang === 'en' && item.kontenEn ? item.kontenEn.replace(/<[^>]+>/g, '') : item.konten.replace(/<[^>]+>/g, '')}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar size={12} />{new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><User size={12} />{item.penulis}</span>
                    </div>
                  </div>
                  <Link to={`/berita/${item.slug}`}
                    className="flex items-center gap-1 text-green-700 font-semibold text-sm mt-3 hover:underline">
                    {t('berita.baca')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
              className="p-2 rounded-full border hover:bg-gray-50 disabled:opacity-30"><ChevronLeft size={18} /></button>
            {[...Array(totalPages)].map((_, i) => (
              <button key={i} onClick={() => setPage(i + 1)}
                className={`w-9 h-9 rounded-full text-sm font-medium ${page === i + 1 ? 'bg-green-700 text-white' : 'border hover:bg-gray-50'}`}>
                {i + 1}
              </button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="p-2 rounded-full border hover:bg-gray-50 disabled:opacity-30"><ChevronRight size={18} /></button>
          </div>
        )}
      </section>
    </div>
  );
}