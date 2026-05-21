import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fasilitas = {
  id: [
    { judul: 'Area Parkir Pengunjung', deskripsi: 'Area parkir luas dengan kapasitas ratusan kendaraan roda dua dan roda empat, dilengkapi sistem pengelolaan parkir modern dan petugas keamanan yang berjaga sepanjang hari.' },
    { judul: 'Pabrik Prosessing Hasil Bumi', deskripsi: 'Fasilitas pengolahan hasil pertanian modern yang mengubah produk segar menjadi produk bernilai tambah tinggi, termasuk pengemasan dan pelabelan untuk distribusi ke pasar.' },
    { judul: 'Pabrik Ekstraksi Herbal', deskripsi: 'Unit pengolahan tanaman herbal untuk menghasilkan ekstrak berkualitas tinggi yang digunakan sebagai bahan baku produk kesehatan, kosmetik, dan suplemen alami.' },
    { judul: 'Pengolahan Buah Tropis', deskripsi: 'Fasilitas khusus untuk mengolah buah-buahan tropis hasil kebun kawasan menjadi produk turunan seperti jus, selai, dan produk olahan bernilai ekspor.' },
  ],
  en: [
    { judul: 'Visitor Parking Area', deskripsi: 'Spacious parking area with capacity for hundreds of two and four-wheeled vehicles, equipped with a modern parking management system and security officers on duty throughout the day.' },
    { judul: 'Agricultural Product Processing Factory', deskripsi: 'Modern agricultural processing facility that transforms fresh produce into high value-added products, including packaging and labeling for market distribution.' },
    { judul: 'Herbal Extraction Factory', deskripsi: 'Herbal plant processing unit producing high-quality extracts used as raw materials for health products, cosmetics, and natural supplements.' },
    { judul: 'Tropical Fruit Processing', deskripsi: 'Specialized facility for processing tropical fruits from the estate garden into derivative products such as juices, jams, and export-quality processed goods.' },
  ],
};

const info = {
  id: { luas: '10.500 m²', kapasitas: '± 400 Kendaraan', tipe: 'Parkir & Industri' },
  en: { luas: '10,500 m²', kapasitas: '± 400 Vehicles', tipe: 'Parking & Industry' },
};

export default function AreaParkir() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const data = fasilitas[lang];
  const infoData = info[lang];

  return (
    <div>
      <section
        className="relative h-72 md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/parkir.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[rgba(6,30,18,0.95)]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-300 text-[10px] font-bold tracking-[0.25em] uppercase">10.500 m²</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            {lang === 'id' ? 'Area Parkir dan Processing' : 'Parking and Processing Area'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Pusat akses kawasan dan pengolahan produk pertanian bernilai tambah'
                : 'Area access hub and value-added agricultural product processing center'}
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
            <div className="w-0.5 h-5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {lang === 'id' ? 'Fasilitas Area' : 'Area Facilities'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            {lang === 'id' ? 'Parkir dan Processing' : 'Parking and Processing'}
          </h2>
        </div>

        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {data.map((item, i) => (
            <div key={i}
              className={`flex gap-6 px-7 py-6 hover:bg-gray-50 transition-colors
                          ${i !== data.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex-shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
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