import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const userData = JSON.parse(localStorage.getItem('userData') || 'null');

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id');
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => setShowLogoutConfirm(true);
  const confirmLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    setShowLogoutConfirm(false);
    setMenuOpen(false);
    toast.success(i18n.language === 'id' ? 'Berhasil keluar' : 'Logged out successfully');
    navigate('/login');
  };

  const navLinks = [
    { path: '/', label: t('nav.beranda') },
    { path: '/tentang-kami', label: t('nav.tentang') },
    { path: '/peta-kawasan', label: t('nav.peta') },
    { path: '/fasilitas', label: t('nav.fasilitas') },
    { path: '/berita', label: t('nav.berita') },
    { path: '/kontak', label: t('nav.kontak') },
  ];

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo-unpab.png" alt="UNPAB" className="h-9 w-9 object-contain"
              onError={e => e.target.style.display = 'none'} />
            <div>
              <div className="text-xs font-bold text-yellow-500 leading-tight">DIKTISAINTEK</div>
              <div className="text-sm font-black text-green-700 leading-tight">BERDAMPAK</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path}
                className={`text-sm font-medium transition-colors hover:text-green-600 whitespace-nowrap ${isActive(path) ? 'text-green-600 font-semibold' : 'text-gray-700'}`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/jelajahi-360"
              className="flex items-center gap-1 bg-green-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-800 transition whitespace-nowrap">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
              </svg>
              {t('nav.jelajahi')}
            </Link>

            <button onClick={toggleLang}
              className="text-xs font-bold text-green-700 border-2 border-green-700 px-2 py-1 rounded-lg hover:bg-green-50 transition w-9 text-center">
              {i18n.language === 'id' ? 'ID' : 'EN'}
            </button>

            {userData ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-2.5 py-1.5">
                  <div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{userData.nama?.[0]?.toUpperCase()}</span>
                  </div>
                  <span className="text-sm text-green-800 font-medium max-w-[80px] truncate">{userData.nama.split(' ')[0]}</span>
                </div>
                <button onClick={handleLogout}
                  className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 border border-red-200 hover:bg-red-50 px-2 py-1.5 rounded-lg transition font-semibold whitespace-nowrap">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
                  </svg>
                  {i18n.language === 'id' ? 'Keluar' : 'Logout'}
                </button>
              </div>
            ) : (
              <Link to="/login"
                className="text-sm font-semibold text-green-700 border-2 border-green-700 px-3 py-1.5 rounded-lg hover:bg-green-50 transition">
                {i18n.language === 'id' ? 'Masuk' : 'Sign In'}
              </Link>
            )}
          </div>

          {/* Mobile: Lang + Burger */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleLang}
              className="text-xs font-bold text-green-700 border-2 border-green-700 px-2 py-1 rounded-lg w-9 text-center hover:bg-green-100">
              {i18n.language === 'id' ? 'ID' : 'EN'}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition">
              {menuOpen
                ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              }
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU — compact dropdown ── */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-sm mx-auto px-4 py-4">

              {/* User info */}
              {userData && (
                <div className="flex items-center gap-3 bg-green-50 rounded-xl px-4 py-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{userData.nama?.[0]?.toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800 text-sm">{userData.nama}</p>
                    <p className="text-green-600 text-xs">{userData.email}</p>
                  </div>
                </div>
              )}

              {/* Nav links — centered grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {navLinks.map(({ path, label }) => (
                  <Link key={path} to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-center py-2.5 px-3 rounded-xl text-sm font-medium transition ${
                      isActive(path)
                        ? 'bg-green-700 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-green-50 hover:text-green-700'
                    }`}>
                    {label}
                  </Link>
                ))}
              </div>

              {/* Action buttons */}
              <div className="space-y-2">
                <Link to="/jelajahi-360"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-green-700 text-white py-3 rounded-xl text-sm font-semibold hover:bg-green-800 transition">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
                  </svg>
                  {t('nav.jelajahi')}
                </Link>

                {userData ? (
                  <button onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full border-2 border-red-200 text-red-500 py-3 rounded-xl text-sm font-semibold hover:bg-red-50 transition">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
                    </svg>
                    {i18n.language === 'id' ? 'Keluar' : 'Logout'}
                  </button>
                ) : (
                  <Link to="/login" onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center w-full border-2 border-green-700 text-green-700 py-3 rounded-xl text-sm font-semibold hover:bg-green-50 transition">
                    {i18n.language === 'id' ? 'Masuk' : 'Sign In'}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── LOGOUT CONFIRMATION MODAL ── */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-slide-up"
            style={{ animationFillMode: 'forwards' }}>

            {/* Icon */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(239,68,68,0.1)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" x2="9" y1="12" y2="12"/>
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
              {i18n.language === 'id' ? 'Konfirmasi Keluar' : 'Confirm Logout'}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              {i18n.language === 'id'
                ? 'Apakah kamu yakin ingin keluar dari akun ini?'
                : 'Are you sure you want to log out of this account?'}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowLogoutConfirm(false)}
                className="py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition">
                {i18n.language === 'id' ? 'Batal' : 'Cancel'}
              </button>
              <button onClick={confirmLogout}
                className="py-3 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition">
                {i18n.language === 'id' ? 'Ya, Keluar' : 'Yes, Logout'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}