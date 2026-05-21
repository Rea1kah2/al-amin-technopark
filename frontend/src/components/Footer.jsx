import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[rgba(6,30,18,0.97)] text-white">

      {/* ─── Main Footer ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8
                      grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-0.5 h-6 bg-emerald-400 rounded-full" />
            <span className="text-white font-black text-lg tracking-tight leading-none">
              Al-Amin<br />
              <span className="text-emerald-400 font-black">Technopark</span>
            </span>
          </div>
          <p className="text-white/45 text-xs leading-relaxed max-w-xs">
            {t('footer.deskripsi')}
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
               className="w-8 h-8 rounded-lg bg-white/5 border border-white/10
                          flex items-center justify-center
                          text-white/45 hover:text-emerald-400 hover:border-emerald-400/40
                          hover:bg-emerald-400/5
                          transition-all duration-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"
               className="w-8 h-8 rounded-lg bg-white/5 border border-white/10
                          flex items-center justify-center
                          text-white/45 hover:text-emerald-400 hover:border-emerald-400/40
                          hover:bg-emerald-400/5
                          transition-all duration-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <polygon points="10 15 15 12 10 9"/>
              </svg>
            </a>
            <a href="mailto:alamin14@Gmail.com"
               className="w-8 h-8 rounded-lg bg-white/5 border border-white/10
                          flex items-center justify-center
                          text-white/45 hover:text-emerald-400 hover:border-emerald-400/40
                          hover:bg-emerald-400/5
                          transition-all duration-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="flex flex-col items-start gap-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-emerald-400">
            {t('footer.navigasi')}
          </p>
          <nav className="flex flex-row gap-2.5">
            {[
              { to: '/',              label: t('footer.nav.beranda')    },
              { to: '/tentang-kami',  label: t('footer.nav.tentang')    },
              { to: '/peta-kawasan',  label: t('footer.nav.peta')       },
              { to: '/berita',        label: t('footer.nav.berita')     },
              { to: '/fasilitas',     label: t('footer.nav.fasilitas')  },
              { to: '/kontak',        label: t('footer.nav.kontak')     },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-white/45 hover:text-emerald-400
                           text-xs font-medium
                           flex items-center gap-2
                           transition-colors duration-150 w-fit group"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-emerald-400">
            {t('footer.kontak')}
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2.5">
              <svg className="text-emerald-400 flex-shrink-0 mt-0.5" width="13" height="13"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <p className="text-white/45 text-xs leading-relaxed">
                {t('kontak.alamat')}
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <svg className="text-emerald-400 flex-shrink-0" width="13" height="13"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a href="mailto:alamin14@Gmail.com"
                 className="text-white/45 hover:text-emerald-400 text-xs transition-colors">
                alamin14@Gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <svg className="text-emerald-400 flex-shrink-0" width="13" height="13"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:08123456789"
                 className="text-white/45 hover:text-emerald-400 text-xs transition-colors">
                08123456789
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ──────────────────────────────────────────── */}
      <div className="border-t border-white/8 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4
                        flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-[11px] font-medium">
            © 2024 Al Amin Techno Park — Universitas Panca Budi 
          </p>
          <p className="text-white/20 text-[11px] px-2">
            {t('footer.hak')}
          </p>
        </div>
      </div>

    </footer>
  );
}