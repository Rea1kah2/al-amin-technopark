import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authAPI.login(form);
      localStorage.setItem('adminToken', res.data.token);
      localStorage.setItem('adminData', JSON.stringify(res.data.admin));
      toast.success('Login berhasil!');
      navigate('/admin');
    } catch {
      toast.error('Email atau password salah');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <Link to="/login"
        className="absolute top-4 left-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        style={{ textDecoration: 'none' }}>
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all group-hover:bg-gray-700"
          style={{ border: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </div>
        <span className="text-xs md:text-sm font-medium hidden sm:block">Kembali ke Login</span>
      </Link>
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={28} className="text-green-700" />
          </div>
          <h1 className="text-2xl font-black text-gray-800">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">Al Amin Techno Park</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="admin@alamin.ac.id"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500" required />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type={showPass ? 'text' : 'password'} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500" required />
              <button type="button" onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button type="submit" disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition disabled:opacity-50">
            {loading ? 'Loading...' : 'Masuk'}
          </button>
        </form>
      <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#9ca3af' }}>
          Bukan admin?{' '}
          <Link to="/login" style={{ color: '#16a34a', fontWeight: 700, textDecoration: 'none' }}>
            Kembali ke halaman user →
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}
