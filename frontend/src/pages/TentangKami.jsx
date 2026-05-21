import { useTranslation } from 'react-i18next';

const nilai = [
  {
    id: 'Inovatif', en: 'Innovative',
    descId: 'Desain berkelanjutan dengan infrastruktur modern dan teknologi terkini.',
    descEn: 'Sustainable design with modern infrastructure and cutting-edge technology.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
        <path d="M10 21h4"/><path d="M12 17v4"/>
      </svg>
    )
  },
  {
    id: 'Kolaboratif', en: 'Collaborative',
    descId: 'Pusat riset dan inovasi untuk teknologi masa depan bersama industri.',
    descEn: 'Research & innovation center for future technology alongside industry.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    id: 'Integritas', en: 'Integrity',
    descId: 'Ekosistem kolaboratif antara industri, akademisi, dan masyarakat.',
    descEn: 'Collaborative ecosystem between industry, academia, and society.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    id: 'Berkelanjutan', en: 'Sustainable',
    descId: 'Berkomitmen pada pembangunan yang ramah lingkungan dan berkelanjutan.',
    descEn: 'Committed to environmentally friendly and sustainable development.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    )
  },
  {
    id: 'Unggul', en: 'Excellent',
    descId: 'Menghasilkan kualitas terbaik dan sumber daya manusia unggul.',
    descEn: 'Producing the best quality and superior human resources.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
];

const timeline = [
  { year: '2021', id: 'Gagasan awal pengembangan kawasan inovasi berbasis pendidikan dan teknologi.', en: 'Initial concept for developing an innovation area based on education and technology.' },
  { year: '2022', id: 'Perencanaan dan pembangunan infrastruktur tahap pertama Al Amin Techno Park.', en: 'Planning and construction of first-phase infrastructure of Al Amin Techno Park.' },
  { year: '2026', id: 'Peresmian kawasan dan dimulainya berbagai program riset serta inkubasi bisnis.', en: 'Official inauguration and the launch of various research programs and business incubation.' },
  { year: '2027', id: 'Pengembangan fasilitas dan pembangunan kerja sama dengan berbagai mitra industri.', en: 'Facility development and establishment of partnerships with various industry partners.' },
  { year: '2028', id: 'Terus berinovasi dan tumbuh menjadi ekosistem unggulan untuk masa depan.', en: 'Continuously innovating and growing into a leading ecosystem for the future.' },
];

const misiList = {
  id: [
    'Mengembangkan ekosistem inovasi yang kolaboratif dan berkelanjutan.',
    'Mendukung riset dan teknologi untuk menjawab tantangan masa depan.',
    'Meningkatkan kualitas pendidikan dan kewirausahaan berbasis teknologi.',
    'Mendorong kemitraan strategis dengan berbagai pihak.',
  ],
  en: [
    'Develop a collaborative and sustainable innovation ecosystem.',
    'Support research and technology to address future challenges.',
    'Improve the quality of technology-based education and entrepreneurship.',
    'Encourage strategic partnerships with various parties.',
  ]
};

export default function TentangKami() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative h-72 md:h-80 bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/tentang.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r
          from-[rgba(6,30,18,0.95)] via-[rgba(6,30,18,0.75)] to-[rgba(6,30,18,0.2)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-0.5 h-5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              {lang === 'id' ? 'Al Amin Techno Park' : 'Al Amin Techno Park'}
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-black">
            {t('nav.tentang')}
          </h1>
        </div>
      </section>

      {/* ── TENTANG SECTION ──────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-0.5 h-5 bg-emerald-600 rounded-full flex-shrink-0" />
              <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
                {lang === 'id' ? 'Tentang Kami' : 'About Us'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-tight">
              {t('tentang.judul')}
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
              {t('tentang.deskripsi')}
            </p>
            <div className="flex items-start gap-4">
              <div className="h-px w-8 bg-emerald-400 flex-shrink-0 mt-2" />
              <p className="text-gray-400 text-sm leading-relaxed">
                {lang === 'id'
                  ? 'Kami berkomitmen untuk menciptakan ekosistem yang mendorong ekonomi daerah dan membentuk generasi unggul yang siap menghadapi masa depan.'
                  : 'We are committed to creating an ecosystem that drives regional economic growth and develops an outstanding generation ready to face the future.'}
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/tentang.jpg"
              alt="Al Amin Techno Park"
              className="rounded-2xl shadow-xl w-full h-72 object-cover"
              onError={e => { e.target.src = 'https://placehold.co/600x400/14532d/white?text=Al+Amin+Techno+Park'; }} />
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
              <p className="text-3xl font-black text-emerald-600">170K+</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                {lang === 'id' ? 'Total m² Kawasan' : 'Total m² Area'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISI & MISI ──────────────────────────────── */}
      <section
        className="relative bg-cover bg-center py-16 md:py-20 px-6"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-[rgba(6,30,18,0.90)]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-0.5 h-5 bg-emerald-400 rounded-full flex-shrink-0" />
            <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              {lang === 'id' ? 'Visi & Misi' : 'Vision & Mission'}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Visi */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-white mb-4">{t('tentang.visi')}</h3>
              <div className="h-px bg-emerald-500/30 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">{t('tentang.visiText')}</p>
            </div>

            {/* Misi */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-white mb-4">{t('tentang.misi')}</h3>
              <div className="h-px bg-emerald-500/30 mb-4" />
              <ul className="space-y-3">
                {(lang === 'id' ? misiList.id : misiList.en).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── NILAI KAMI ───────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-0.5 h-5 bg-emerald-600 rounded-full flex-shrink-0" />
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
              {t('tentang.nilaiKami')}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 ml-7">
            {lang === 'id' ? 'Nilai Yang Kami Pegang' : 'Values We Uphold'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {nilai.map((n) => (
              <div key={n.id}
                className="group flex flex-col p-5 border border-gray-100 rounded-2xl
                           hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50
                           transition-all duration-300 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-emerald-100
                                flex items-center justify-center mb-4 transition-colors text-emerald-700">
                  {n.icon}
                </div>
                <h4 className="font-black text-gray-800 text-sm mb-2">
                  {lang === 'id' ? n.id : n.en}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {lang === 'id' ? n.descId : n.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left: Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-0.5 h-5 bg-emerald-600 rounded-full flex-shrink-0" />
              <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">
                {t('tentang.sejarah')}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 ml-7">
              {t('tentang.perjalanan')}
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-emerald-200" />

              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <div key={item.year} className="flex gap-5 relative">
                    {/* Dot */}
                    <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 mt-0.5 border-2 z-10
                      ${idx === 0 ? 'bg-emerald-600 border-emerald-600'
                        : idx <= 1 ? 'bg-emerald-400 border-emerald-400'
                        : 'bg-white border-emerald-300'}`} />
                    <div>
                      <span className="text-emerald-600 font-black text-sm">{item.year}</span>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {lang === 'id' ? item.id : item.en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image + stats */}
          <div className="flex flex-col gap-5">
            <img
              src="/images/sport.jpg"
              alt="Al Amin Techno Park Journey"
              className="rounded-2xl shadow-lg w-full h-92 object-cover"
              onError={e => { e.target.src = 'https://placehold.co/600x400/14532d/white?text=Al+Amin+Techno+Park'; }} />

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '2021', label: lang === 'id' ? 'Tahun Berdiri' : 'Founded' },
                { val: '8+', label: lang === 'id' ? 'Zona Kawasan' : 'Area Zones' },
                { val: '170K', label: lang === 'id' ? 'Total m²' : 'Total m²' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                  <p className="text-xl font-black text-emerald-600">{val}</p>
                  <p className="text-xs text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}