import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fasilitasAPI } from '../services/api';

// ── Data statis lama — tetap dipertahankan ────────────────────────
const FASILITAS_STATIS = [
  {
    id: 'static-1',
    nama: 'Perpustakaan', namaEn: 'Library',
    gambar: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&fit=crop',
    deskripsi: 'Perpustakaan Al Amin Techno Park menyediakan koleksi buku, jurnal ilmiah, dan referensi digital yang lengkap untuk mendukung kegiatan riset, akademik, dan inovasi. Dilengkapi ruang baca nyaman, ruang diskusi kelompok, dan akses internet berkecepatan tinggi untuk seluruh civitas akademika.',
    deskripsiEn: 'The Al Amin Techno Park Library provides a complete collection of books, scientific journals, and digital references to support research, academic, and innovation activities.',
    fitur: {
      id: ['Koleksi 10.000+ buku & jurnal', 'Ruang baca & diskusi nyaman', 'Akses e-library digital', 'Area kerja & co-working'],
      en: ['10,000+ books & journal collection', 'Comfortable reading & discussion rooms', 'Digital e-library access', 'Work & co-working area']
    }
  },
  {
    id: 'static-2',
    nama: 'Laboratorium', namaEn: 'Laboratory',
    gambar: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop',
    deskripsi: 'Laboratorium modern yang dilengkapi greenhouse canggih dan fasilitas riset terapan untuk pengembangan teknologi pertanian, pengolahan hasil bumi, dan inovasi agrikultur.',
    deskripsiEn: 'A modern laboratory equipped with advanced greenhouse and applied research facilities for the development of agricultural technology and agricultural innovation.',
    fitur: {
      id: ['Greenhouse & nursery modern', 'Lab analisis tanah & tanaman', 'Fasilitas riset terapan', 'Peralatan uji kualitas produk'],
      en: ['Modern greenhouse & nursery', 'Soil & plant analysis lab', 'Applied research facilities', 'Product quality testing equipment']
    }
  },
  {
    id: 'static-3',
    nama: 'Rusun', namaEn: 'Dormitory',
    gambar: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&fit=crop',
    deskripsi: 'Rusunawa (Rumah Susun Sederhana Sewa) yang dibangun untuk menampung pengelola, staf, dan mahasiswa yang berkegiatan di kawasan.',
    deskripsiEn: 'Rusunawa (Simple Rental Apartment) built to accommodate managers, staff, and students active in the area.',
    fitur: {
      id: ['Unit hunian lengkap & nyaman', 'Fasilitas air bersih & listrik', 'Area bersama & komunal', 'Keamanan 24 jam'],
      en: ['Complete & comfortable housing units', 'Clean water & electricity facilities', 'Common & communal areas', '24-hour security']
    }
  },
  {
    id: 'static-4',
    nama: 'Perkebunan', namaEn: 'Plantation',
    gambar: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&fit=crop',
    deskripsi: 'Area perkebunan terintegrasi yang mengembangkan berbagai komoditas unggulan seperti kebun kopi, kebun buah tropis, dan tanaman hortikultura.',
    deskripsiEn: 'An integrated plantation area developing various superior commodities such as coffee gardens, tropical fruit orchards, and horticulture plants.',
    fitur: {
      id: ['Kebun kopi & buah tropis', 'Sistem irigasi modern', 'Area edukasi agribisnis', 'Pengolahan pasca panen'],
      en: ['Coffee & tropical fruit orchards', 'Modern irrigation system', 'Agribusiness education area', 'Post-harvest processing']
    }
  },
  {
    id: 'static-5',
    nama: 'Peternakan', namaEn: 'Livestock',
    gambar: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80&fit=crop',
    deskripsi: 'Fasilitas peternakan terpadu yang mencakup pemeliharaan sapi, ayam, kambing, dan kuda. Berfungsi sebagai pusat produksi sekaligus laboratorium hidup untuk edukasi dan wisata interaksi hewan.',
    deskripsiEn: 'Integrated livestock facilities covering cattle, chicken, goat, and horse husbandry. Serves as a production center and living lab for education and animal interaction tourism.',
    fitur: {
      id: ['Peternakan sapi, ayam & kambing', 'Stable kuda & grazing area', 'Edukasi & wisata interaksi', 'Unit daur ulang limbah organik'],
      en: ['Cattle, chicken & goat farm', 'Horse stable & grazing area', 'Education & interaction tourism', 'Organic waste recycling unit']
    }
  },
  {
    id: 'static-6',
    nama: 'Camping', namaEn: 'Camping',
    gambar: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80&fit=crop',
    deskripsi: 'Area perkemahan alam terbuka di tengah hutan hijau yang asri, dilengkapi fasilitas camping lengkap, area api unggun, penginapan lodge kayu bergaya rustic, serta berbagai aktivitas outdoor.',
    deskripsiEn: 'Open nature camping area amidst lush green forest, equipped with complete camping facilities, bonfire areas, rustic-style wooden lodge accommodation, and various outdoor activities.',
    fitur: {
      id: ['Area perkemahan & api unggun', 'Lodge & penginapan alam', 'Hiking & outdoor activities', 'Konservasi & edukasi alam'],
      en: ['Camping area & bonfires', 'Nature lodge & accommodation', 'Hiking & outdoor activities', 'Conservation & nature education']
    }
  },
  {
    id: 'static-7',
    nama: 'Market', namaEn: 'Market',
    gambar: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80&fit=crop',
    deskripsi: 'Area market place sebagai pusat perdagangan dan pameran produk unggulan kawasan. Menyediakan ruang bagi petani dan peternak untuk memasarkan produk segar dan olahan langsung kepada konsumen.',
    deskripsiEn: 'A marketplace area as the trading and exhibition center for the area\'s superior products. Provides space for farmers to market fresh and processed products directly to consumers.',
    fitur: {
      id: ['Pameran & penjualan produk lokal', 'Fasilitas pengelolaan produk', 'Area loading & bongkar muat', 'Tempat wisata belanja agro'],
      en: ['Local product exhibition & sales', 'Product management facilities', 'Loading & unloading area', 'Agro shopping tourism spot']
    }
  },
  {
    id: 'static-8',
    nama: 'Masjid', namaEn: 'Mosque',
    gambar: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1800&q=85',
    deskripsi: 'Masjid Al-Amin merupakan pusat kegiatan keagamaan dan spiritual kawasan yang megah dan representatif. Dirancang sebagai landmark islami yang mengintegrasikan nilai spiritual, edukasi, dan pemberdayaan masyarakat.',
    deskripsiEn: 'Al-Amin Mosque is a magnificent and representative religious and spiritual activity center. Designed as an Islamic landmark integrating spiritual values, education, and community empowerment.',
    fitur: {
      id: ['Masjid utama berkapasitas besar', 'Taman bunga & kolam refleksi', 'Parkir jamaah + panel surya', 'Peternakan hewan kurban'],
      en: ['Large capacity main mosque', 'Flower garden & reflection pond', 'Congregation parking + solar panels', 'Sacrificial animal farm']
    }
  },
  {
    id: 'static-9',
    nama: 'Parkiran', namaEn: 'Parking',
    gambar: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&q=80&fit=crop',
    deskripsi: 'Area parkir terpusat dan strategis yang menampung kendaraan pengunjung, staf, dan kendaraan operasional kawasan. Dilengkapi sistem sirkulasi efisien dan akses mudah ke seluruh zona kawasan.',
    deskripsiEn: 'A centralized and strategic parking area accommodating visitor, staff, and operational vehicles. Equipped with an efficient circulation system and easy access to all zones.',
    fitur: {
      id: ['Kapasitas kendaraan besar', 'Area muat & bongkar barang', 'Sirkulasi akses terstruktur', 'Dekat pusat kawasan (plaza)'],
      en: ['Large vehicle capacity', 'Loading & unloading area', 'Structured access circulation', 'Close to area center (plaza)']
    }
  },
];

// ── Normalisasi data API agar format sama dengan data statis ──────
function normalizeApiItem(item) {
  return {
    id: `api-${item.id}`,
    nama: item.nama,
    namaEn: item.namaEn || item.nama,
    gambar: item.gambar || '',
    deskripsi: item.deskripsi || '',
    deskripsiEn: item.deskripsiEn || item.deskripsi || '',
    fitur: null, // data dari API tidak punya fitur
    isFromAdmin: true, // penanda bahwa item ini dari admin
  };
}

export default function Fasilitas() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [apiFasilitas, setApiFasilitas] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [selected, setSelected]         = useState(null);

  // ── Fetch fasilitas dari admin ──────────────────────────────────
  useEffect(() => {
    fasilitasAPI.getAll()
      .then(res => setApiFasilitas(res.data.map(normalizeApiItem)))
      .catch(() => setApiFasilitas([]))
      .finally(() => setLoading(false));
  }, []);

  // ── Gabungkan: statis dulu, lalu dari admin ─────────────────────
  const semuaFasilitas = [...FASILITAS_STATIS, ...apiFasilitas];

  // ── Keyboard & scroll lock ──────────────────────────────────────
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <div>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative h-72 bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 pb-8 w-full">
          <h1 className="text-white text-3xl font-black">{t('fasilitas.judul')}</h1>
          <p className="text-white/80 text-base">{t('fasilitas.subjudul')}</p>
        </div>
      </section>

      {/* ─── CONTENT ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <p className="text-gray-600 max-w-xl mb-2 text-sm md:text-base">{t('fasilitas.deskripsi')}</p>
        <p className="text-green-600 text-xs font-medium mb-10">
          {lang === 'id'
            ? ' Klik fasilitas untuk melihat detail lengkapnya'
            : ' Click a facility to see full details'}
        </p>

        <h2 className="text-2xl font-bold text-green-700 mb-8">{t('fasilitas.akses')}</h2>

        {/* Grid — statis + admin */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {/* Data statis selalu tampil */}
          {FASILITAS_STATIS.map(item => (
            <FasilitasCard
              key={item.id}
              item={item}
              lang={lang}
              onClick={() => setSelected(item)}
            />
          ))}

          {/* Loading skeleton untuk data admin */}
          {loading && [...Array(3)].map((_, i) => (
            <div key={`skel-${i}`}
              className="rounded-2xl bg-gray-100 animate-pulse"
              style={{ aspectRatio: '4/3' }} />
          ))}

          {/* Data dari admin muncul setelah statis */}
          {!loading && apiFasilitas.map(item => (
            <FasilitasCard
              key={item.id}
              item={item}
              lang={lang}
              onClick={() => setSelected(item)}
              badge={lang === 'id' ? 'Baru' : 'New'}
            />
          ))}
        </div>
      </section>

      {/* ─── MODAL ─────────────────────────────────────────────── */}
      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-up"
            style={{ animationFillMode: 'forwards', maxWidth: '480px', maxHeight: '80vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Image header */}
            <div className="relative overflow-hidden flex-shrink-0" style={{ height: '180px' }}>
              <img
                src={selected.gambar || 'https://placehold.co/600x400/166534/white?text=Fasilitas'}
                alt={lang === 'en' ? selected.namaEn : selected.nama}
                className="w-full h-full object-cover"
                onError={e => {
                  e.target.src = 'https://placehold.co/600x400/166534/white?text=Fasilitas';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-7 h-7 bg-white/90 rounded-full
                           flex items-center justify-center shadow hover:bg-white transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="#374151" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Title */}
              <div className="absolute bottom-3 left-4">
                <h2 className="text-white text-lg font-black drop-shadow-md">
                  {lang === 'en' ? selected.namaEn : selected.nama}
                </h2>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh - 180px)' }}>
              <div className="px-5 py-4">

                {/* Accent line */}
                <div className="h-0.5 w-10 rounded-full mb-4 bg-gradient-to-r from-green-800 to-green-500" />

                {/* Deskripsi */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {lang === 'en' ? selected.deskripsiEn : selected.deskripsi}
                </p>

                {selected.fitur && (
                  <>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">
                      {lang === 'id' ? 'Fitur & Fasilitas' : 'Features & Facilities'}
                    </h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {(lang === 'id' ? selected.fitur.id : selected.fitur.en).map((f, i) => (
                        <div key={i} className="flex items-start gap-2 bg-green-50 rounded-xl px-3 py-2">
                          <div className="w-1 h-1 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                          <span className="text-xs text-gray-700 font-medium leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Close hint */}
                <p className="text-center text-xs text-gray-300 pb-1">
                  {lang === 'id' ? 'Klik di luar untuk menutup' : 'Click outside to close'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Sub-component: kartu fasilitas ───────────────────────────────
function FasilitasCard({ item, lang, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group cursor-pointer text-left w-full focus:outline-none"
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300"
        style={{ aspectRatio: '4/3' }}
      >
        <img
          src={item.gambar || 'https://placehold.co/600x400/166534/white?text=Fasilitas'}
          alt={lang === 'en' ? item.namaEn : item.nama}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={e => {
            e.target.src = 'https://placehold.co/600x400/166534/white?text=Fasilitas';
          }}
        />

        {badge && (
          <div className="absolute top-3 left-3 bg-emerald-500 text-white
                          text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
            {badge}
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300
                        flex items-center justify-center">
          <span className="bg-white text-green-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           translate-y-2 group-hover:translate-y-0 transform">
            {lang === 'id' ? 'Lihat Detail' : 'View Details'}
          </span>
        </div>
      </div>

      {/* Label */}
      <h3 className="font-semibold text-gray-700 text-sm md:text-base
                     group-hover:text-green-700 transition-colors text-center w-full">
        {lang === 'en' ? item.namaEn : item.nama}
      </h3>
    </button>
  );
}