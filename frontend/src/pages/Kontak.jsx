import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

// ── Inline SVG Brand Icons ────────────────────────────────────────
function WhatsAppIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.855L.057 23.272a.75.75 0 0 0 .92.92l5.416-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.36-.214-3.733 1.011 1.011-3.733-.214-.36A9.9 9.9 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1S21.9 6.534 21.9 12 17.466 21.9 12 21.9z" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────
export default function Kontak() {
  const { t } = useTranslation();

  return (
    <div className="font-sans">
      {/* ─── HERO SECTION ──────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[520px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b
                        from-transparent
                        via-black/5
                        from-[0%] via-[35%]
                        to-[rgba(6,30,18,0.97)]
                        to-[100%]" />

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-10 pt-16
                        bg-gradient-to-t from-[rgba(6,30,18,0.97)] to-transparent">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-0.5 h-5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              Al-Amin Technopark
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-black text-white
                        leading-none tracking-tight mb-4">
            {t('kontak.judul')}
          </h1>

          {/* Subheading */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-8 bg-emerald-400/60 flex-shrink-0" />
            <p className="text-white/65 text-base md:text-lg font-light leading-relaxed">
              {t('kontak.subjudul')}
            </p>
          </div>

        </div>
      </section>

      {/* ─── 3 CONTACT INFO CARDS ──────────────────────────────────── */}
      <section className="relative z-20 -mt-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card: Lokasi */}
          <div className="group bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4
                          border-b-4 border-emerald-500
                          hover:-translate-y-1.5 hover:shadow-emerald-100/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100
                            flex items-center justify-center
                            group-hover:bg-emerald-100 transition-colors">
              <MapPin size={22} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-500 mb-1">
                {t('kontak.lokasi')}
              </p>
              <p className="text-gray-800 text-sm font-medium leading-snug">
                {t('kontak.alamat')}
              </p>
            </div>
          </div>

          {/* Card: Email (accent) */}
          <div className="group bg-emerald-600 rounded-2xl shadow-2xl shadow-emerald-600/30 p-6 flex flex-col gap-4
                          border-b-4 border-emerald-800
                          hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center
                            group-hover:bg-white/25 transition-colors">
              <Mail size={22} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-200 mb-1">
                {t('kontak.email')}
              </p>
              <a
                href="mailto:alamin14@Gmail.com"
                className="text-white text-sm font-semibold hover:text-emerald-200 transition-colors break-all"
              >
                alamin14@Gmail.com
              </a>
            </div>
          </div>

          {/* Card: Telepon */}
          <div className="group bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4
                          border-b-4 border-emerald-500
                          hover:-translate-y-1.5 hover:shadow-emerald-100/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100
                            flex items-center justify-center
                            group-hover:bg-emerald-100 transition-colors">
              <Phone size={22} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-500 mb-1">
                {t('kontak.telepon')}
              </p>
              <a
                href="tel:08123456789"
                className="text-gray-800 text-sm font-semibold hover:text-emerald-600 transition-colors"
              >
                08123456789
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORM + MAP SECTION ────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-emerald-600 mb-2">
              {t('kontak.hubungiKami')}
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
              {t('kontak.form.judulPesan')}{' '}
              <span className="text-emerald-600">{t('kontak.form.judulPesanAksen')}</span>
            </h2>

            <div className="space-y-4">

              {/* Nama + Telepon */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                    {t('kontak.form.nama')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('kontak.form.namaPlaceholder')}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white
                               focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                               transition placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                    {t('kontak.form.telepon')}
                  </label>
                  <input
                    type="tel"
                    placeholder={t('kontak.form.teleponPlaceholder')}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white
                               focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                               transition placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                  {t('kontak.form.email')}
                </label>
                <input
                  type="email"
                  placeholder={t('kontak.form.emailPlaceholder')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white
                             focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                             transition placeholder:text-gray-400"
                />
              </div>

              {/* Subjek */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                  {t('kontak.form.subjek')}
                </label>
                <input
                  type="text"
                  placeholder={t('kontak.form.subjekPlaceholder')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white
                             focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                             transition placeholder:text-gray-400"
                />
              </div>

              {/* Pesan */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                  {t('kontak.form.pesan')}
                </label>
                <textarea
                  rows={5}
                  placeholder={t('kontak.form.pesanPlaceholder')}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white
                             focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                             transition resize-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="button"
                disabled
                className="w-full bg-emerald-600 opacity-60 cursor-not-allowed
                           text-white font-bold py-3.5 rounded-xl
                           flex items-center justify-center gap-2.5
                           text-sm tracking-wide"
              >
                <Send size={16} />
                {t('kontak.form.kirim')}
              </button>

            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-7 border-t border-gray-200">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {t('kontak.temukanKamiDi')}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6208123456789"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d]
                             text-white px-4 py-2.5 rounded-xl text-xs font-bold
                             transition-colors shadow-sm"
                >
                  <WhatsAppIcon size={15} />
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400
                             text-white px-4 py-2.5 rounded-xl text-xs font-bold
                             hover:opacity-90 transition-opacity shadow-sm"
                >
                  <InstagramIcon size={15} />
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#0f69e0]
                             text-white px-4 py-2.5 rounded-xl text-xs font-bold
                             transition-colors shadow-sm"
                >
                  <FacebookIcon size={15} />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Google Maps */}
          <div className="flex flex-col">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-emerald-600 mb-2">
              {t('kontak.lokasiKami')}
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
              {t('kontak.map.judul')}{' '}
              <span className="text-emerald-600">{t('kontak.map.judulAksen')}</span>
            </h2>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex-1 min-h-[340px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.2!2d98.65!3d3.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313d2c3d95e3c9%3A0x0!2sKutalimbaru%2C+Deli+Serdang+Regency%2C+North+Sumatra!5e0!3m2!1sen!2sid!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Al-Amin Technopark"
              />
            </div>

            {/* Address box */}
            <div className="mt-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{t('kontak.alamatNama')}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                  {t('kontak.alamatDetail')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/6208123456789"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50
                   bg-[#25D366] hover:bg-[#1ebe5d]
                   text-white rounded-full px-5 py-3.5
                   shadow-2xl shadow-green-500/40
                   hover:scale-105 active:scale-95
                   transition-all duration-200
                   flex items-center gap-2.5 text-sm font-bold"
        aria-label="Chat via WhatsApp"
      >
        <WhatsAppIcon size={20} />
        WhatsApp
      </a>

    </div>
  );
}