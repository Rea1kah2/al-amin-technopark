import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { beritaAPI } from '../services/api';

export default function BeritaDetail() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    beritaAPI.getBySlug(slug)
      .then(res => setBerita(res.data))
      .catch(() => setBerita(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full" /></div>;
  if (!berita) return <div className="min-h-screen flex items-center justify-center text-gray-500">Berita tidak ditemukan</div>;

  const judul = lang === 'en' && berita.judulEn ? berita.judulEn : berita.judul;
  const konten = lang === 'en' && berita.kontenEn ? berita.kontenEn : berita.konten;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/berita" className="flex items-center gap-2 text-green-700 font-medium mb-8 hover:underline">
        <ArrowLeft size={18} /> Kembali ke Berita
      </Link>
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">{berita.kategori}</span>
      <h1 className="text-3xl font-black text-gray-800 mt-4 mb-4">{judul}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span className="flex items-center gap-1"><Calendar size={14} />{new Date(berita.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        <span className="flex items-center gap-1"><User size={14} />{berita.penulis}</span>
      </div>
      {berita.gambar && <img src={berita.gambar} alt={judul} className="w-full h-80 object-cover rounded-2xl mb-8 shadow" />}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">{konten}</div>
    </div>
  );
}