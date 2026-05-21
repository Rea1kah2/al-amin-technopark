import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fasilitas = {
  id: [
    { judul: 'Pusat Energi Terbarukan', deskripsi: 'Instalasi panel surya dan sistem energi terbarukan skala besar yang menyuplai kebutuhan listrik kawasan secara mandiri, sekaligus menjadi demonstrasi teknologi hijau.' },
    { judul: 'Instalasi Pengolahan Air Bersih', deskripsi: 'Sistem pengolahan air terpadu yang menjamin pasokan air bersih berkualitas untuk seluruh zona kawasan, dilengkapi sistem filtrasi dan monitoring kualitas air otomatis.' },
    { judul: 'Gudang Peralatan & Bengkel', deskripsi: 'Fasilitas penyimpanan dan perawatan peralatan berat, kendaraan operasional, dan mesin pertanian kawasan, dilengkapi bengkel maintenance lengkap dan tenaga teknisi.' },
    { judul: 'Unit Daur Ulang Limbah Organik', deskripsi: 'Fasilitas pengolahan limbah organik dari seluruh kawasan menjadi kompos dan biogas, mendukung operasional ramah lingkungan dan prinsip zero-waste kawasan.' },
  ],
  en: [
    { judul: 'Renewable Energy Center', deskripsi: 'Large-scale solar panel installation and renewable energy systems supplying the complex\'s electricity needs independently, while serving as a green technology demonstration.' },
    { judul: 'Clean Water Treatment Plant', deskripsi: 'Integrated water treatment system ensuring quality clean water supply for all zones, equipped with automatic filtration systems and water quality monitoring.' },
    { judul: 'Equipment Warehouse & Workshop', deskripsi: 'Storage and maintenance facility for heavy equipment, operational vehicles, and agricultural machinery, equipped with a complete maintenance workshop and technicians.' },
    { judul: 'Organic Waste Recycling Unit', deskripsi: 'Organic waste processing facility from across the complex producing compost and biogas, supporting eco-friendly operations and the area\'s zero-waste principles.' },
  ],
};

const info = {
  id: { luas: '8.083 m²', kapasitas: 'Operasional', tipe: 'Infrastruktur' },
  en: { luas: '8,083 m²', kapasitas: 'Operational', tipe: 'Infrastructure' },
};

export default function AreaUtilitas() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const data = fasilitas[lang];
  const infoData = info[lang];

  return (
    <div>
      <section
        className="relative h-72 md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/utilitas.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[rgba(6,30,18,0.95)]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="text-yellow-300 text-[10px] font-bold tracking-[0.25em] uppercase">8.083 m²</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            {lang === 'id' ? 'Area Utilitas dan Pemeliharaan' : 'Utilities and Maintenance Area'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Infrastruktur pendukung operasional dan keberlanjutan kawasan'
                : 'Supporting infrastructure for operational sustainability of the complex'}
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
            <div className="w-0.5 h-5 bg-yellow-400 rounded-full" />
            <span className="text-yellow-600 text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {lang === 'id' ? 'Fasilitas Area' : 'Area Facilities'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            {lang === 'id' ? 'Utilitas dan Pemeliharaan' : 'Utilities and Maintenance'}
          </h2>
        </div>

        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {data.map((item, i) => (
            <div key={i}
              className={`flex gap-6 px-7 py-6 hover:bg-gray-50 transition-colors
                          ${i !== data.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex-shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5" />
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