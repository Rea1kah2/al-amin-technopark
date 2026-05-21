import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const areas = [
  {
    id: 1, nama: 'Area Plaza Utama', namaEn: 'Main Plaza Area',
    luas: '20.500 m²', warna: 'border-red-400', dot: '#ef4444',
    path: '/area/plaza-utama', img: '/images/plaza.jpg',
    fungsi: {
      id: ['Area berkumpul pengunjung', 'Event & kegiatan utama', 'Pusat orientasi kawasan'],
      en: ['Visitor gathering area', 'Events & main activities', 'Area orientation center']
    }
  },
  {
    id: 2, nama: 'Area Pertanian, Kebun & Agrotechnopark', namaEn: 'Agriculture, Garden & Agrotechnopark',
    luas: '8.470 + 36.822 m²', warna: 'border-green-400', dot: '#16a34a',
    path: '/area/pertanian-agrotechnopark', img: '/images/pertanian.jpg',
    fungsi: {
      id: ['Budidaya tanaman', 'Edukasi pertanian modern', 'Greenhouse & demonstrasi'],
      en: ['Crop cultivation', 'Modern agricultural education', 'Greenhouse & demonstrations']
    }
  },
  {
    id: 3, nama: 'Area Camping Ground, Lodge & Konservasi', namaEn: 'Camping Ground, Lodge & Conservation',
    luas: '49.705 m²', warna: 'border-emerald-400', dot: '#10b981',
    path: '/area/camping-ground', img: '/images/camping.jpg',
    fungsi: {
      id: ['Camping ground & perkemahan', 'Penginapan lodge', 'Konservasi alam & hutan'],
      en: ['Camping ground', 'Lodge accommodation', 'Nature & forest conservation']
    }
  },
  {
    id: 4, nama: 'Area Peternakan & Stable Kuda', namaEn: 'Livestock & Horse Stable Area',
    luas: '27.050 + 17.800 m²', warna: 'border-orange-400', dot: '#f97316',
    path: '/area/stable-kuda-grazing', img: '/images/peternakan.jpg',
    fungsi: {
      id: ['Sapi, Ayam, Kambing & Kuda', 'Edukasi peternakan & berkuda', 'Wisata interaksi hewan'],
      en: ['Cattle, Chicken, Goat & Horse', 'Livestock & equestrian education', 'Animal interaction tourism']
    }
  },
  {
    id: 5, nama: 'Area Parkir dan Processing', namaEn: 'Parking and Processing Area',
    luas: '10.500 m²', warna: 'border-blue-400', dot: '#3b82f6',
    path: '/area/parkir-prosessing', img: '/images/parkir.jpg',
    fungsi: {
      id: ['Parkir kendaraan pengunjung', 'Pengolahan hasil pertanian', 'Akses keluar-masuk kawasan'],
      en: ['Visitor vehicle parking', 'Agricultural product processing', 'Area access control']
    }
  },
  {
    id: 6, nama: 'Area Sport Centre dan Rusun', namaEn: 'Sport Centre and Rusun Area',
    luas: '20.500 m²', warna: 'border-red-400', dot: '#ef4444',
    path: '/area/sport-centre-rusun', img: '/images/sport.jpg',
    fungsi: {
      id: ['Fasilitas olahraga lengkap', 'Rumah susun pengelola & staf', 'Aktivitas komunitas warga'],
      en: ['Complete sports facilities', 'Staff apartment building', 'Community activities']
    }
  },
  {
    id: 7, nama: 'Area Masjid Al-Amin', namaEn: 'Al-Amin Mosque Area',
    luas: '17.800 m²', warna: 'border-green-400', dot: '#16a34a',
    path: '/area/masjid-al-amin', img: '/images/masjid.jpg',
    fungsi: {
      id: ['Masjid utama kawasan', 'Taman bunga & kolam refleksi', 'Peternakan hewan kurban'],
      en: ['Main area mosque', 'Flower garden & reflection pond', 'Sacrificial animal farm']
    }
  },
  {
    id: 8, nama: 'Area Utilitas dan Pemeliharaan', namaEn: 'Utilities and Maintenance Area',
    luas: '8.083 m²', warna: 'border-yellow-400', dot: '#f59e0b',
    path: '/area/utilitas', img: '/images/utilitas.jpg',
    fungsi: {
      id: ['Infrastruktur teknis & listrik', 'Gudang & bengkel maintenance', 'Pusat energi terbarukan'],
      en: ['Technical & electrical infrastructure', 'Warehouse & maintenance workshop', 'Renewable energy center']
    }
  },
];

export default function PetaKawasan() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div>

      {/* ─── HERO SECTION ──────────────────────────────────────────── */}
      <section
        className="relative h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/peta-kawasan.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b
                        from-transparent via-black/20 to-[rgba(6,30,18,0.92)]" />
        <div className="absolute bottom-0 left-0 right-0
                        max-w-7xl mx-auto px-6 md:px-10 pb-8 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-0.5 h-5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              Al-Amin Technopark
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-2">
            {lang === 'id'
              ? 'Science Techno Park (STP) Al-Amin'
              : 'Al-Amin Science Techno Park (STP)'}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-emerald-400/60" />
            <p className="text-white/60 text-sm">
              {lang === 'id'
                ? 'Kawasan terintegrasi seluas ±170.000 m²'
                : 'Integrated area of ±170,000 m²'}
            </p>
          </div>
        </div>
      </section>

      {/* ─── PETA OVERVIEW ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/images/peta-kawasan.jpg"
            alt="Peta Kawasan STP Al-Amin"
            className="w-full object-cover max-h-[500px]"
            onError={e => {
              e.target.src = 'https://placehold.co/1200x500/166534/white?text=Peta+Kawasan+STP+Al-Amin';
            }}
          />
        </div>

        {/* ─── AREA CARDS GRID ───────────────────────────────────────── */}
        {/* Seluruh card bisa diklik langsung — tombol "See More" dihapus */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {areas.map(area => (
            <Link
              key={area.id}
              to={area.path}
              className={`border-2 ${area.warna} bg-white rounded-2xl overflow-hidden
                          hover:shadow-xl hover:-translate-y-1
                          transition-all duration-300 group block`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={area.img}
                  alt={lang === 'en' ? area.namaEn : area.nama}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition duration-500"
                  onError={e => {
                    e.target.src = `https://placehold.co/600x300/166534/white?text=${encodeURIComponent(area.nama)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Luas badge */}
                <div className="absolute bottom-3 right-3
                                bg-white/90 backdrop-blur rounded-lg px-2.5 py-1">
                  <span className="text-xs font-bold text-gray-700">{area.luas}</span>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute top-3 right-3
                                w-7 h-7 rounded-full
                                bg-white/0 group-hover:bg-white/90
                                flex items-center justify-center
                                transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2.5"
                       style={{ color: area.dot }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <div
                    className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0"
                    style={{ background: area.dot }}
                  />
                  <h3 className="font-bold text-gray-800 text-sm leading-tight
                                 group-hover:text-gray-900 transition-colors">
                    {lang === 'en' ? area.namaEn : area.nama}
                  </h3>
                </div>

                <ul className="text-xs text-gray-500 space-y-1">
                  {(lang === 'en' ? area.fungsi.en : area.fungsi.id).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span style={{ color: area.dot }}>•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}