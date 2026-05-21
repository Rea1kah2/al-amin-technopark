import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { beritaAPI, fasilitasAPI } from '../../services/api';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem('adminData') || '{}');
  const [stats, setStats] = useState({ berita: 0, fasilitas: 0 });
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    Promise.all([beritaAPI.getAllAdmin(), fasilitasAPI.getAll()])
      .then(([b, f]) => setStats({ berita: b.data.length, fasilitas: f.data.length }))
      .catch(() => {});
  }, []);

  const confirmLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  const statCards = [
    {
      label: 'Total Berita',
      value: stats.berita,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"/>
          <path d="M16 2v4"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h5"/>
        </svg>
      ),
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      label: 'Total Fasilitas',
      value: stats.fasilitas,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="M3 9h18"/><path d="M9 21V9"/>
        </svg>
      ),
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
  ];

  const menuCards = [
    {
      to: '/admin/berita',
      label: 'Kelola Berita',
      desc: 'Tambah, edit, dan hapus artikel berita kawasan',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"/>
          <path d="M16 2v4"/><path d="M8 10h8"/><path d="M8 14h8"/>
        </svg>
      ),
      accent: 'group-hover:bg-blue-600',
      bg: 'bg-blue-50 text-blue-600',
    },
    {
      to: '/admin/fasilitas',
      label: 'Kelola Fasilitas',
      desc: 'Tambah, edit, dan hapus data fasilitas kawasan',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="M3 9h18"/><path d="M9 21V9"/>
        </svg>
      ),
      accent: 'group-hover:bg-emerald-600',
      bg: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Navbar */}
      <nav className="bg-[#14532d] px-6 py-0 flex items-center justify-between h-16 shadow-lg">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/>
            <rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
          </svg>
          <span className="text-white font-bold text-base tracking-tight">
            Admin Panel — Al Amin Techno Park
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
            <div className="w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">{admin.nama?.[0]?.toUpperCase()}</span>
            </div>
            <span className="text-white/90 text-sm font-medium">Halo, {admin.nama}</span>
          </div>
          <button onClick={() => setShowLogout(true)}
            className="flex items-center gap-2 bg-white text-[#14532d] px-3 py-1.5 rounded-lg
                       text-sm font-semibold hover:bg-gray-100 transition">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
            </svg>
            Keluar
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-800">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Selamat datang kembali, <span className="font-semibold text-[#14532d]">{admin.nama}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {statCards.map(({ label, value, icon, color }) => (
            <div key={label}
              className={`bg-white rounded-2xl p-6 border shadow-sm flex items-center gap-5 ${color.split(' ')[2]}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${color.split(' ').slice(0,2).join(' ')}`}>
                {icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">{label}</p>
                <p className="text-4xl font-black text-gray-800 mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-0.5 h-5 bg-[#14532d] rounded-full" />
          <h2 className="text-lg font-bold text-gray-700">Kelola Konten</h2>
        </div>

        {/* Menu cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {menuCards.map(({ to, label, desc, icon, accent, bg }) => (
            <Link key={to} to={to}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                         hover:shadow-md hover:border-gray-200 transition-all duration-200
                         flex items-center gap-5">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                              transition-colors duration-200 ${bg} ${accent} group-hover:text-white`}>
                {icon}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base">{label}</p>
                <p className="text-sm text-gray-400 mt-0.5">{desc}</p>
              </div>
              <svg className="ml-auto text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0"
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-slide-up"
            style={{ animationFillMode: 'forwards' }}>
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
              </svg>
            </div>
            <h3 className="text-xl font-black text-gray-800 text-center mb-2">Konfirmasi Keluar</h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              Apakah kamu yakin ingin keluar dari Admin Panel?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowLogout(false)}
                className="py-3 rounded-xl border-2 border-gray-200 text-gray-700
                           font-semibold text-sm hover:bg-gray-50 transition">
                Batal
              </button>
              <button onClick={confirmLogout}
                className="py-3 rounded-xl bg-red-500 text-white font-semibold
                           text-sm hover:bg-red-600 transition">
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}