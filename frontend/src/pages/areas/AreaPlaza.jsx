import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fasilitas = {
  id: [
    { judul: 'Plaza Utama Info Pavilion', deskripsi: 'Titik pusat kawasan yang berfungsi sebagai ruang terbuka publik, area orientasi pengunjung, dan pusat informasi terpadu yang menghubungkan semua zona kawasan.' },
    { judul: 'Taman Bunga Plaza', deskripsi: 'Taman bunga indah di sekitar plaza yang menciptakan suasana asri dan menyambut pengunjung dengan visual yang menarik dan spot foto yang instagramable.' },
    { judul: 'Jalur Pengunjung Utama', deskripsi: 'Jalur pejalan kaki berbatu cobblestone yang nyaman dan estetis, menghubungkan pintu gerbang utama menuju plaza dan seluruh area kawasan.' },
    { judul: 'Area Event & Seremonial', deskripsi: 'Ruang multifungsi untuk berbagai kegiatan seperti pameran produk, acara komunitas, pelantikan, dan kegiatan seremonial resmi kawasan.' },
  ],
  en: [
    { judul: 'Main Plaza Info Pavilion', deskripsi: 'The central hub of the area serving as a public open space, visitor orientation area, and integrated information center connecting all zones.' },
    { judul: 'Plaza Flower Garden', deskripsi: 'Beautiful flower gardens around the plaza creating a fresh atmosphere, welcoming visitors with attractive visuals and Instagram-worthy photo spots.' },
    { judul: 'Main Visitor Pathway', deskripsi: 'Comfortable and aesthetic cobblestone pedestrian path connecting the main gate to the plaza and all areas of the complex.' },
    { judul: 'Event & Ceremonial Area', deskripsi: 'Multipurpose space for various activities such as product exhibitions, community events, inaugurations, and official ceremonial functions.' },
  ],
};

const info = {
  id: { luas: '20.500 m²', kapasitas: '± 2.000 Orang', tipe: 'Ruang Publik' },
  en: { luas: '20,500 m²', kapasitas: '± 2,000 People', tipe: 'Public Space' },
};

export default function AreaPlaza() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const data = fasilitas[lang];
  const infoData = info[lang];

  return (
    <div>
      {/* ─── HERO DARK STRIP ───────────────────────────────────────── */}
      <section
        className="relative h-72 md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/plaza.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[rgba(6,30,18,0.95)]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-red-300 text-[10px] font-bold tracking-[0.25em] uppercase">20.500 m²</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            {lang === 'id' ? 'Area Plaza Utama' : 'Main Plaza Area'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Pusat orientasi dan ruang publik kawasan Al-Amin Technopark'
                : 'Orientation center and public space of Al-Amin Technopark'}
            </p>
          </div>
        </div>
      </section>

      {/* ─── KONTEN ────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">

        {/* Back link */}
        <Link to="/peta-kawasan"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700
                     text-sm font-semibold mb-10 transition-colors group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          {lang === 'id' ? 'Kembali ke Peta Kawasan' : 'Back to Area Map'}
        </Link>

        {/* Section header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-0.5 h-5 bg-red-400 rounded-full" />
            <span className="text-red-500 text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {lang === 'id' ? 'Fasilitas Area' : 'Area Facilities'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            {lang === 'id' ? 'Area Plaza Utama' : 'Main Plaza Area'}
          </h2>
        </div>

        {/* Vertical list with dividers */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {data.map((item, i) => (
            <div key={i}
              className={`flex gap-6 px-7 py-6 hover:bg-gray-50 transition-colors
                          ${i !== data.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex-shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">{item.judul}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="mt-8 bg-gray-50 border border-gray-100 rounded-2xl p-6
                        grid grid-cols-3 divide-x divide-gray-200">
          {[
            { label: lang === 'id' ? 'Luas Area' : 'Area Size', value: infoData.luas },
            { label: lang === 'id' ? 'Kapasitas' : 'Capacity',  value: infoData.kapasitas },
            { label: lang === 'id' ? 'Tipe' : 'Type',           value: infoData.tipe },
          ].map(({ label, value }) => (
            <div key={label} className="text-center px-4">
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide mb-1">{label}</p>
              <p className="text-emerald-600 font-black text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}