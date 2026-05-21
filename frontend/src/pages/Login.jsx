import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAPI } from '../services/api';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const LeafIcon = ({ className, style }) => (
  <svg viewBox="0 0 40 40" className={className} style={style} fill="currentColor">
    <path d="M20 2C10 2 4 12 4 22c0 8 5 14 12 16-1-4-1-8 1-12 2-4 6-7 11-8-3 3-5 7-5 12 0 3 1 6 3 8 6-2 10-8 10-16C36 12 30 2 20 2z"/>
  </svg>
);

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return toast.error('Email dan password wajib diisi!');
    setLoading(true);
    try {
      const res = await userAPI.login(form);
      localStorage.setItem('userToken', res.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.user));
      toast.success(`Selamat datang, ${res.data.user.nama}! 👋`);
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.message || 'Login gagal. Cek koneksi atau kredensialmu.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex w-[55%] relative overflow-hidden flex-col justify-between p-12"
        style={{ background: 'linear-gradient(145deg, #0a1f0a 0%, #14532d 40%, #1a3a1a 70%, #0f2d0f 100%)' }}>

        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full opacity-20 animate-float"
            style={{ background: 'radial-gradient(circle, #16a34a, transparent)', top: '-10%', left: '-10%' }} />
          <div className="absolute w-80 h-80 rounded-full opacity-15 animate-float2"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', bottom: '10%', right: '-5%' }} />
          <div className="absolute w-64 h-64 rounded-full opacity-10 animate-float3"
            style={{ background: 'radial-gradient(circle, #4ade80, transparent)', top: '50%', left: '60%' }} />
        </div>

        {/* Floating leaves */}
        <LeafIcon className="absolute text-green-500 opacity-20 animate-float w-16 h-16" style={{ top: '15%', right: '20%' }} />
        <LeafIcon className="absolute text-green-400 opacity-10 animate-float2 w-24 h-24" style={{ bottom: '25%', left: '10%' }} />
        <LeafIcon className="absolute text-yellow-500 opacity-10 animate-float3 w-12 h-12" style={{ top: '60%', right: '10%' }} />

        {/* Diagonal decorative line */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-5" viewBox="0 0 600 800" preserveAspectRatio="none">
            <line x1="0" y1="200" x2="600" y2="600" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="300" x2="600" y2="700" stroke="white" strokeWidth="1"/>
            <line x1="100" y1="0" x2="700" y2="800" stroke="white" strokeWidth="1"/>
          </svg>
        </div>

        {/* Top logo */}
        <div className="relative z-10 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)' }}>
              <LeafIcon className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">Diktisaintek Berdampak</p>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="opacity-0 animate-slide-up delay-100" style={{ animationFillMode: 'forwards' }}>
            <p className="text-green-300 text-sm font-medium tracking-widest uppercase mb-4">
              ✦ Selamat Datang Kembali
            </p>
          </div>

          <div className="opacity-0 animate-slide-up delay-200" style={{ animationFillMode: 'forwards' }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-5xl xl:text-6xl font-black text-white leading-tight mb-2">
              Al Amin
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-5xl xl:text-6xl font-black leading-tight mb-6 gold-shimmer">
              Techno Park
            </h1>
          </div>

          <div className="opacity-0 animate-slide-up delay-300" style={{ animationFillMode: 'forwards' }}>
            <p className="text-green-200 text-lg leading-relaxed max-w-sm mb-8 opacity-80">
              Kawasan inovasi, teknologi, dan pendidikan terpadu untuk membangun masa depan yang berkelanjutan.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 opacity-0 animate-slide-up delay-400" style={{ animationFillMode: 'forwards' }}>
            {['Agrotechnopark', 'Stable Kuda', 'Sport Centre', 'irtual Tour 360°'].map(f => (
              <span key={f} className="px-3 py-1.5 rounded-full text-xs font-medium text-green-200"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="relative z-10 grid grid-cols-3 gap-4 opacity-0 animate-slide-up delay-500" style={{ animationFillMode: 'forwards' }}>
          {[['49.705 m²', 'Camping Ground'], ['20.500 m²', 'Plaza Utama'], ['17.800 m²', 'Stable Kuda']].map(([val, lbl]) => (
            <div key={lbl} className="glass rounded-xl p-3 text-center">
              <p className="text-yellow-400 font-bold text-sm">{val}</p>
              <p className="text-green-300 text-xs mt-0.5">{lbl}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative"
        style={{ background: 'linear-gradient(160deg, #f0fdf4 0%, #ffffff 50%, #fefce8 100%)' }}>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#16a34a 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative w-full max-w-md">

          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl font-black text-green-800">Al Amin Techno Park</h1>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 opacity-0 animate-slide-up delay-200"
            style={{ animationFillMode: 'forwards', boxShadow: '0 25px 60px rgba(20,83,45,0.15)' }}>

            <div className="mb-8">
              <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl font-bold text-gray-900 mb-1">Masuk</h2>
              <p className="text-gray-500 text-sm">Masuk untuk mengakses seluruh fitur kawasan</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Email</label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused === 'email' ? 'text-green-600' : 'text-gray-400'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <input type="email" value={form.email}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: focused === 'email' ? '2px solid #16a34a' : '2px solid #e5e7eb',
                      background: focused === 'email' ? '#f0fdf4' : '#f9fafb'
                    }} required />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Password</label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused === 'password' ? 'text-green-600' : 'text-gray-400'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <input type={showPass ? 'text' : 'password'} value={form.password}
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused('')}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: focused === 'password' ? '2px solid #16a34a' : '2px solid #e5e7eb',
                      background: focused === 'password' ? '#f0fdf4' : '#f9fafb'
                    }} required />
                  <button type="button" onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors">
                    {showPass
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    }
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all mt-2 relative overflow-hidden"
                style={{
                  background: loading ? '#86efac' : 'linear-gradient(135deg, #166534 0%, #16a34a 50%, #15803d 100%)',
                  boxShadow: loading ? 'none' : '0 8px 25px rgba(22,101,52,0.4)',
                  transform: loading ? 'scale(0.98)' : 'scale(1)'
                }}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Memproses...
                  </span>
                ) : 'Masuk ke Dashboard'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">ATAU</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <p className="text-center text-sm text-gray-500">
              Belum punya akun?{' '}
              <Link to="/register" className="font-bold text-green-700 hover:text-green-800 transition-colors">
                Daftar sekarang →
              </Link>
            </p>
          </div>

          {/* Admin link */}
          <p className="text-center mt-5">
            <Link to="/admin/login"
              className="text-xs text-gray-400 hover:text-green-700 transition-colors font-medium">
              🔐 Masuk sebagai Administrator
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}