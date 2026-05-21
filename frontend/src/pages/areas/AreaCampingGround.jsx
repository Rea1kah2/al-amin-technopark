import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fasilitas = {
  id: [
    { judul: 'Camping Ground', deskripsi: 'Area perkemahan terbuka di tengah alam hijau yang asri, dilengkapi api unggun, area bermain, dan fasilitas MCK bersih untuk pengalaman berkemah yang nyaman dan aman.' },
    { judul: 'Lodge & Penginapan', deskripsi: 'Penginapan kayu bergaya rustic yang menyatu dengan alam. Tersedia berbagai tipe kamar dari family cottage hingga dormitory, dengan pemandangan hutan dan sungai yang memukau.' },
    { judul: 'Konservasi Alam', deskripsi: 'Zona konservasi flora dan fauna lokal, termasuk jalur interpretasi alam, area penanaman pohon, dan program edukasi lingkungan untuk pelajar dan masyarakat umum.' },
    { judul: 'Aktivitas Outdoor', deskripsi: 'Berbagai aktivitas seru seperti hiking, river tracking, flying fox, outbound, dan team building yang dipandu oleh instruktur berpengalaman di alam terbuka.' },
  ],
  en: [
    { judul: 'Camping Ground', deskripsi: 'Open camping area surrounded by lush green nature, equipped with campfire spots, play areas, and clean sanitation facilities for a comfortable and safe camping experience.' },
    { judul: 'Lodge & Accommodation', deskripsi: 'Rustic wooden lodges blending with nature. Available in various room types from family cottages to dormitories, with stunning forest and river views.' },
    { judul: 'Nature Conservation', deskripsi: 'Conservation zone for local flora and fauna, including nature interpretation trails, tree planting areas, and environmental education programs for students and the public.' },
    { judul: 'Outdoor Activities', deskripsi: 'Exciting activities including hiking, river tracking, flying fox, outbound, and team building guided by experienced instructors in the open nature.' },
  ],
};

const info = {
  id: { luas: '49.705 m²', kapasitas: '± 500 Orang', tipe: 'Wisata Alam' },
  en: { luas: '49,705 m²', kapasitas: '± 500 People', tipe: 'Nature Tourism' },
};

export default function AreaCampingGround() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const data = fasilitas[lang];
  const infoData = info[lang];

  return (
    <div>
      <section
        className="relative h-72 md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/camping.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[rgba(6,30,18,0.95)]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-300 text-[10px] font-bold tracking-[0.25em] uppercase">49.705 m²</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            {lang === 'id' ? 'Area Camping Ground, Lodge & Konservasi' : 'Camping Ground, Lodge & Conservation Area'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Area terluas di kawasan Al-Amin Technopark untuk wisata alam dan konservasi'
                : 'The largest area in Al-Amin Technopark for nature tourism and conservation'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <Link to="/peta-kawasan"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700
                     text-sm font-semibold mb-10 transition-colors group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          {lang === 'id' ? 'Kembali ke Peta Kawasan' : 'Back to Area Map'}
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-0.5 h-5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-600 text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {lang === 'id' ? 'Fasilitas Area' : 'Area Facilities'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            {lang === 'id' ? 'Camping Ground, Lodge & Konservasi' : 'Camping Ground, Lodge & Conservation'}
          </h2>
        </div>

        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {data.map((item, i) => (
            <div key={i}
              className={`flex gap-6 px-7 py-6 hover:bg-gray-50 transition-colors
                          ${i !== data.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex-shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">{item.judul}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>

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