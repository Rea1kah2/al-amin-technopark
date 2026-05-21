import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const fasilitas = {
  id: [
    { judul: 'Lapangan Sepak Bola & Atletik', deskripsi: 'Lapangan sepak bola berstandar dengan lintasan atletik mengelilinginya, digunakan untuk pertandingan resmi, latihan rutin, dan event olahraga tingkat regional.' },
    { judul: 'Lapangan Basket & Tenis', deskripsi: 'Lapangan basket dan tenis indoor maupun outdoor berstandar internasional, tersedia untuk kebutuhan latihan harian staf dan turnamen komunitas.' },
    { judul: 'Gedung Olahraga Terpadu', deskripsi: 'Gedung olahraga serbaguna yang menampung berbagai cabang olahraga indoor seperti bulu tangkis, voli, senam, dan dilengkapi kolam renang serta fasilitas gym modern.' },
    { judul: 'Rusunawa Pengelola & Staf', deskripsi: 'Hunian vertikal yang nyaman untuk pengelola dan staf kawasan Al-Amin Technopark, dilengkapi fasilitas komunal, ruang bersama, dan sistem keamanan terpadu.' },
  ],
  en: [
    { judul: 'Football & Athletics Field', deskripsi: 'Standard football field with surrounding athletics track, used for official matches, regular training, and regional-level sports events.' },
    { judul: 'Basketball & Tennis Courts', deskripsi: 'International standard indoor and outdoor basketball and tennis courts, available for daily staff training and community tournaments.' },
    { judul: 'Integrated Sports Building', deskripsi: 'Multipurpose sports building accommodating various indoor sports such as badminton, volleyball, gymnastics, and equipped with a swimming pool and modern gym facilities.' },
    { judul: 'Staff & Management Apartment', deskripsi: 'Comfortable vertical housing for Al-Amin Technopark managers and staff, equipped with communal facilities, common rooms, and integrated security systems.' },
  ],
};

const info = {
  id: { luas: '20.500 m²', kapasitas: '± 1.500 Orang', tipe: 'Olahraga & Hunian' },
  en: { luas: '20,500 m²', kapasitas: '± 1,500 People', tipe: 'Sports & Residential' },
};

export default function AreaSportCentre() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const data = fasilitas[lang];
  const infoData = info[lang];

  return (
    <div>
      <section
        className="relative h-72 md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sport.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[rgba(6,30,18,0.95)]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-red-300 text-[10px] font-bold tracking-[0.25em] uppercase">20.500 m²</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            {lang === 'id' ? 'Area Sport Centre dan Rusun' : 'Sport Centre and Rusun Area'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Fasilitas olahraga lengkap dan hunian terpadu untuk staf kawasan'
                : 'Complete sports facilities and integrated housing for area staff'}
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
            <div className="w-0.5 h-5 bg-red-400 rounded-full" />
            <span className="text-red-500 text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {lang === 'id' ? 'Fasilitas Area' : 'Area Facilities'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            {lang === 'id' ? 'Sport Centre dan Rusunawa' : 'Sport Centre and Staff Housing'}
          </h2>
        </div>

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