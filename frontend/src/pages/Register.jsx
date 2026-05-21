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

const InputField = ({ label, type, value, onChange, placeholder, icon, name, required }) => {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPass = type === 'password';

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 block mb-1.5">{label}</label>
      <div className="relative">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused ? 'text-green-600' : 'text-gray-400'}`}>
          {icon}
        </div>
        <input
          type={isPass ? (show ? 'text' : 'password') : type}
          value={value} onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all"
          style={{
            border: focused ? '2px solid #16a34a' : '2px solid #e5e7eb',
            background: focused ? '#f0fdf4' : '#f9fafb',
            paddingRight: isPass ? '48px' : undefined
          }} />
        {isPass && (
          <button type="button" onClick={() => setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors">
            {show
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            }
          </button>
        )}
      </div>
    </div>
  );
};

export default function Register() {
  const [form, setForm] = useState({ nama: '', email: '', password: '', konfirmasi: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const strength = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : 3;
  const strengthLabel = ['', 'Lemah', 'Cukup', 'Kuat'];
  const strengthColor = ['', '#ef4444', '#f59e0b', '#16a34a'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.konfirmasi) return toast.error('Konfirmasi password tidak cocok!');
    if (form.password.length < 6) return toast.error('Password minimal 6 karakter!');
    setLoading(true);
    try {
      const res = await userAPI.register({ nama: form.nama, email: form.email, password: form.password });
      localStorage.setItem('userToken', res.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.user));
      toast.success('Akun berhasil dibuat! Selamat datang 🎉');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registrasi gagal');
    } finally {
      setLoading(false);
    }
  };

  const icons = {
    user: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    email: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    lock: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-[45%] relative overflow-hidden flex-col justify-between p-12"
        style={{ background: 'linear-gradient(145deg, #0a1f0a 0%, #14532d 40%, #1a3a1a 70%, #0f2d0f 100%)' }}>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-80 h-80 rounded-full opacity-20 animate-float"
            style={{ background: 'radial-gradient(circle, #16a34a, transparent)', top: '5%', right: '-10%' }} />
          <div className="absolute w-64 h-64 rounded-full opacity-15 animate-float2"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', bottom: '15%', left: '-5%' }} />
        </div>

        <LeafIcon className="absolute text-green-500 opacity-20 animate-float w-20 h-20" style={{ top: '20%', left: '15%' }} />
        <LeafIcon className="absolute text-yellow-400 opacity-10 animate-float2 w-14 h-14" style={{ bottom: '30%', right: '20%' }} />

        <div className="relative z-10">
          <div className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase mb-1">Diktisaintek Berdampak</div>
        </div>

        <div className="relative z-10">
          <p className="text-green-300 text-sm font-medium tracking-widest uppercase mb-4">✦ Bergabung Sekarang</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl font-black text-white leading-tight mb-4">
            Mulai<br />Perjalananmu<br />
            <span className="gold-shimmer">Bersama Kami</span>
          </h1>
          <p className="text-green-200 leading-relaxed max-w-sm opacity-80">
            Daftarkan dirimu dan nikmati akses penuh ke seluruh informasi, fasilitas, dan program Al Amin Techno Park.
          </p>
        </div>

        <div className="relative z-10 space-y-3">
          {[
            {text: 'Akses informasi lengkap kawasan' },
            {text: 'Baca berita & kegiatan terkini' },
            {text: 'Nikmati Virtual Tour 360°' },
            {text: 'Eksplorasi peta kawasan interaktif' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
              <span className="text-xl">{icon}</span>
              <span className="text-green-200 text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative overflow-y-auto"
        style={{ background: 'linear-gradient(160deg, #f0fdf4 0%, #ffffff 50%, #fefce8 100%)' }}>

        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#16a34a 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 opacity-0 animate-slide-up delay-100"
            style={{ animationFillMode: 'forwards', boxShadow: '0 25px 60px rgba(20,83,45,0.15)' }}>

            <div className="mb-6">
              <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl font-bold text-gray-900 mb-1">Buat Akun</h2>
              <p className="text-gray-500 text-sm">Isi data di bawah untuk mendaftar</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField label="Nama Lengkap" type="text" value={form.nama}
                onChange={set('nama')} placeholder="Nama lengkap kamu" icon={icons.user} required />
              <InputField label="Email" type="email" value={form.email}
                onChange={set('email')} placeholder="email@example.com" icon={icons.email} required />
              <div>
                <InputField label="Password" type="password" value={form.password}
                  onChange={set('password')} placeholder="Minimal 6 karakter" icon={icons.lock} required />
                {form.password.length > 0 && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-1 flex-1">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-1 flex-1 rounded-full transition-all"
                          style={{ background: i <= strength ? strengthColor[strength] : '#e5e7eb' }} />
                      ))}
                    </div>
                    <span className="text-xs font-medium" style={{ color: strengthColor[strength] }}>
                      {strengthLabel[strength]}
                    </span>
                  </div>
                )}
              </div>
              <InputField label="Konfirmasi Password" type="password" value={form.konfirmasi}
                onChange={set('konfirmasi')} placeholder="Ulangi password" icon={icons.lock} required />

              {/* Match indicator */}
              {form.konfirmasi.length > 0 && (
                <p className={`text-xs font-medium flex items-center gap-1 ${form.password === form.konfirmasi ? 'text-green-600' : 'text-red-500'}`}>
                  {form.password === form.konfirmasi ? '✓ Password cocok' : '✗ Password tidak cocok'}
                </p>
              )}

              <button type="submit" disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all"
                style={{
                  background: loading ? '#86efac' : 'linear-gradient(135deg, #166534 0%, #16a34a 50%, #15803d 100%)',
                  boxShadow: loading ? 'none' : '0 8px 25px rgba(22,101,52,0.4)',
                }}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Membuat Akun...
                  </span>
                ) : 'Buat Akun Sekarang →'}
              </button>
            </form>

            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">SUDAH PUNYA AKUN?</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <Link to="/login"
              className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm transition-all"
              style={{ border: '2px solid #16a34a', color: '#16a34a' }}
              onMouseEnter={e => { e.target.style.background = '#f0fdf4' }}
              onMouseLeave={e => { e.target.style.background = 'transparent' }}>
              Masuk ke Akun →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}