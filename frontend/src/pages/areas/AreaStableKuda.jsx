import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fasilitas = {
  id: [
    { judul: 'Kandang & Paddock Kuda', deskripsi: 'Fasilitas kandang kuda modern dengan paddock luas untuk latihan dan perawatan kuda, dikelola oleh tenaga profesional berpengalaman di bidang ekuestrian.' },
    { judul: 'Area Peternakan Sapi, Ayam & Kambing', deskripsi: 'Area pemeliharaan ternak sapi, ayam, dan kambing secara intensif dan modern, menghasilkan produk susu, daging, dan telur berkualitas untuk kebutuhan kawasan.' },
    { judul: 'Edukasi Berkuda & Peternakan', deskripsi: 'Program edukasi interaktif tentang cara merawat kuda, teknik berkuda dasar, dan pengelolaan peternakan modern, tersedia untuk pengunjung umum dan pelajar.' },
    { judul: 'Wisata Interaksi Hewan', deskripsi: 'Paket wisata edukatif yang memungkinkan pengunjung berinteraksi langsung dengan berbagai hewan ternak, memberi makan, dan belajar tentang kehidupan di peternakan.' },
  ],
  en: [
    { judul: 'Horse Stable & Paddock', deskripsi: 'Modern horse stable facilities with spacious paddocks for training and horse care, managed by experienced equestrian professionals.' },
    { judul: 'Cattle, Chicken & Goat Farm', deskripsi: 'Intensive and modern livestock farming area for cattle, chickens, and goats, producing quality dairy, meat, and egg products for the complex\'s needs.' },
    { judul: 'Equestrian & Farming Education', deskripsi: 'Interactive educational programs on horse care, basic riding techniques, and modern farm management, available for general visitors and students.' },
    { judul: 'Animal Interaction Tourism', deskripsi: 'Educational tourism packages allowing visitors to directly interact with various farm animals, feed them, and learn about life on the farm.' },
  ],
};

const info = {
  id: { luas: '27.050 + 17.800 m²', kapasitas: '± 250 Pengunjung', tipe: 'Peternakan & Ekuestrian' },
  en: { luas: '27,050 + 17,800 m²', kapasitas: '± 250 Visitors', tipe: 'Livestock & Equestrian' },
};

export default function AreaStableKuda() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const data = fasilitas[lang];
  const infoData = info[lang];

  return (
    <div>
      <section
        className="relative h-72 md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/peternakan.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[rgba(6,30,18,0.95)]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span className="text-orange-300 text-[10px] font-bold tracking-[0.25em] uppercase">27.050 + 17.800 m²</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            {lang === 'id' ? 'Area Peternakan & Stable Kuda' : 'Livestock & Horse Stable Area'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Pusat peternakan modern dan wisata interaksi hewan kawasan'
                : 'Modern livestock center and animal interaction tourism hub'}
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
            <div className="w-0.5 h-5 bg-orange-500 rounded-full" />
            <span className="text-orange-500 text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {lang === 'id' ? 'Fasilitas Area' : 'Area Facilities'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            {lang === 'id' ? 'Peternakan & Stable Kuda' : 'Livestock & Horse Stable'}
          </h2>
        </div>

        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {data.map((item, i) => (
            <div key={i}
              className={`flex gap-6 px-7 py-6 hover:bg-gray-50 transition-colors
                          ${i !== data.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex-shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5" />
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