import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MASJID_IMG = '/images/masjid.jpg';

const fasilitas = {
  id: [
    { judul: 'Masjid Utama Al-Amin', deskripsi: 'Masjid utama kawasan dengan arsitektur modern berpadu tradisional Islam, berkapasitas besar dan dilengkapi fasilitas ibadah lengkap untuk pengelola, staf, dan pengunjung kawasan.' },
    { judul: 'Taman Bunga & Kolam Refleksi', deskripsi: 'Taman indah di sekitar masjid dengan kolam refleksi yang menciptakan suasana tenang dan damai, menjadi tempat peristirahatan dan kontemplasi bagi pengunjung.' },
    { judul: 'Peternakan Hewan Kurban', deskripsi: 'Area khusus untuk pemeliharaan hewan kurban seperti kambing dan sapi, dikelola secara profesional dan digunakan untuk kegiatan keagamaan di hari raya Idul Adha.' },
    { judul: 'Kebun Komunitas & Agrotechnopark Islami', deskripsi: 'Kebun komunitas yang dikelola dengan prinsip pertanian Islami, menyediakan hasil bumi segar untuk kebutuhan kawasan dan sebagai media edukasi pertanian berbasis nilai Islam.' },
  ],
  en: [
    { judul: 'Al-Amin Main Mosque', deskripsi: 'The main mosque of the complex with modern architecture blending traditional Islamic elements, with large capacity and complete worship facilities for managers, staff, and visitors.' },
    { judul: 'Flower Garden & Reflection Pond', deskripsi: 'Beautiful garden surrounding the mosque with a reflection pond creating a calm and peaceful atmosphere, serving as a resting and contemplation space for visitors.' },
    { judul: 'Sacrificial Animal Farm', deskripsi: 'Dedicated area for raising sacrificial animals such as goats and cattle, professionally managed and used for religious activities during Eid al-Adha celebrations.' },
    { judul: 'Community Garden & Islamic Agrotechnopark', deskripsi: 'Community garden managed with Islamic agricultural principles, providing fresh produce for the complex and serving as an educational medium for Islam-based farming.' },
  ],
};

const info = {
  id: { luas: '17.800 m²', kapasitas: '± 1.000 Jamaah', tipe: 'Fasilitas Ibadah' },
  en: { luas: '17,800 m²', kapasitas: '± 1,000 Worshippers', tipe: 'Worship Facility' },
};

export default function AreaMasjid() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'id';
  const data = fasilitas[lang];
  const infoData = info[lang];

  return (
    <div>
      <section
        className="relative h-72 md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url('${MASJID_IMG}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[rgba(6,30,18,0.95)]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-[10px] font-bold tracking-[0.25em] uppercase">17.800 m²</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
            {lang === 'id' ? 'Area Masjid Al-Amin' : 'Al-Amin Mosque Area'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Pusat spiritual dan kegiatan keagamaan kawasan Al-Amin Technopark'
                : 'Spiritual center and religious activities hub of Al-Amin Technopark'}
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
            <div className="w-0.5 h-5 bg-green-500 rounded-full" />
            <span className="text-green-600 text-[10px] font-extrabold uppercase tracking-[0.3em]">
              {lang === 'id' ? 'Fasilitas Area' : 'Area Facilities'}
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900">
            {lang === 'id' ? 'Masjid Al-Amin' : 'Al-Amin Mosque'}
          </h2>
        </div>

        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {data.map((item, i) => (
            <div key={i}
              className={`flex gap-6 px-7 py-6 hover:bg-gray-50 transition-colors
                          ${i !== data.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex-shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5" />
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