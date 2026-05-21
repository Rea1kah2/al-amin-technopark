import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const zones = [
  { key: 'z1', path: '/area/sport-centre-rusun',          img: '/images/sport.jpg'      },
  { key: 'z2', path: '/area/parkir-prosessing',           img: '/images/parkir.jpg'     },
  { key: 'z3', path: '/area/plaza-utama',                 img: '/images/plaza.jpg'      },
  { key: 'z4', path: '/area/pertanian-agrotechnopark',    img: '/images/pertanian.jpg'  },
  { key: 'z5', path: '/area/stable-kuda-grazing',         img: '/images/peternakan.jpg' },
  { key: 'z6', path: '/area/camping-ground',              img: '/images/camping.jpg'    },
  { key: 'z7', path: '/area/utilitas',                    img: '/images/utilitas.jpg'   },
  { key: 'z8', path: '/area/masjid-al-amin',              img: '/images/masjid.jpg'     },
];

const stats = [
  { value: '8',    labelKey: 'virtualTour.stat1' },
  { value: '360°', labelKey: 'virtualTour.stat2' },
  { value: '100+', labelKey: 'virtualTour.stat3' },
  { value: '24/7', labelKey: 'virtualTour.stat4' },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* ─── HERO SECTION ──────────────────────────────────────────── */}
      {/* Split: overlay gelap di kiri, foto bersih terlihat di kanan  */}
      <section className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-stretch" style={{ backgroundImage: "url('/images/hero-clean.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r
                        from-[rgba(6,30,18,0.97)] from-[0%]
                        via-[rgba(6,30,18,0.85)] via-[40%]
                        to-[rgba(6,30,18,0.15)] to-[100%]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10
                        py-24 flex items-center w-full">
          <div className="w-full max-w-xl">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-0.5 h-5 bg-emerald-400 rounded-full flex-shrink-0" />
              <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
                {t('hero.tag')}
              </span>
            </div>

            <h1 className="text-5xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-5">
              {t('hero.judulAwal')}
              <br /><span className="text-emerald-400">{t('hero.judulAksen')}</span>
            </h1>

            {/* Divider + Subheading */}
            <div className="flex items-start gap-4 mb-8">
              <div className="h-px w-8 bg-emerald-400/60 flex-shrink-0 mt-3" />
              <p className="text-white/65 text-sm md:text-base font-light leading-relaxed">
                {t('hero.deskripsi')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/peta-kawasan"
                className="flex items-center gap-2
                          bg-emerald-600 hover:bg-emerald-700
                          text-white px-5 py-3 rounded-xl
                          font-semibold text-sm
                          transition-all duration-200
                          shadow-lg shadow-emerald-900/40"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                {t('hero.btnKawasan')}
              </Link>

              <Link
                to="/jelajahi-360"
                className="flex items-center gap-2
                          bg-white/10 hover:bg-white/20
                          backdrop-blur-sm
                          border border-white/25
                          text-white px-5 py-3 rounded-xl
                          font-semibold text-sm
                          transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
                {t('hero.btnVideo')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZONES GRID ────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {t('zona.judul')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {zones.map(({ key, path, img }) => (
              <Link
                key={key}
                to={path}
                className="relative overflow-hidden rounded-2xl group aspect-square"
              >
                {img ? (
                  <img
                    src={img}
                    alt={t(`zona.${key}`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className={`${img ? 'hidden' : 'flex'} w-full h-full bg-green-100 items-center justify-center text-4xl`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-semibold leading-tight">
                    {t(`zona.${key}`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIRTUAL TOUR CTA ──────────────────────────────────────── */}
      {/* Split 2 kolom: teks + tombol kiri | stat cards kanan        */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Overlay gelap merata */}
        <div className="absolute inset-0 bg-[rgba(6,30,18,0.88)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0
                          divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* LEFT: Teks + CTA */}
            <div className="flex flex-col justify-center gap-5 lg:pr-14 pb-10 lg:pb-0">

              {/* Badge */}
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-5 bg-emerald-400 rounded-full flex-shrink-0" />
                <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
                  {t('virtualTour.tag')}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                {t('virtualTour.judulAwal')}{' '}
                <span className="text-emerald-400">{t('virtualTour.judulAksen')}</span>
              </h2>

              {/* Subheading */}
              <div className="flex items-start gap-4">
                <div className="h-px w-8 bg-emerald-400/60 flex-shrink-0 mt-3" />
                <p className="text-white/65 text-sm md:text-base font-light leading-relaxed max-w-md">
                  {t('virtualTour.deskripsi')}
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  to="/jelajahi-360"
                  className="inline-flex items-center gap-2
                             bg-emerald-600 hover:bg-emerald-700
                             text-white px-6 py-3.5 rounded-xl
                             font-semibold text-sm
                             transition-all duration-200
                             shadow-lg shadow-emerald-900/50"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    <path d="M2 12h20"/>
                  </svg>
                  {t('virtualTour.btn')}
                </Link>
              </div>
            </div>

            {/* RIGHT: Stat Cards */}
            <div className="flex items-center lg:pl-14 pt-10 lg:pt-0">
              <div className="grid grid-cols-2 gap-4 w-full">
                {stats.map(({ value, labelKey }) => (
                  <div
                    key={labelKey}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5
                               hover:bg-white/10 transition-colors duration-200"
                  >
                    <p className="text-3xl font-black text-emerald-400 leading-none mb-2">
                      {value}
                    </p>
                    <p className="text-white/55 text-xs font-medium leading-snug">
                      {t(labelKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}