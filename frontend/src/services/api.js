import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({ baseURL: API_BASE });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken') || localStorage.getItem('adminToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const beritaAPI = {
  getAll: (params) => api.get('/berita', { params }),
  getBySlug: (slug) => api.get(`/berita/slug/${slug}`),
  getAllAdmin: () => api.get('/berita/admin/all'),
  create: (data) => api.post('/berita', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  update: (id, data) => api.put(`/berita/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  delete: (id) => api.delete(`/berita/${id}`)
};

export const fasilitasAPI = {
  getAll: () => api.get('/fasilitas'),
  create: (data) => api.post('/fasilitas', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  update: (id, data) => api.put(`/fasilitas/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  delete: (id) => api.delete(`/fasilitas/${id}`)
};

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me')
};

export const userAPI = {
  register: (data) => api.post('/users/register', data),
  login: (data) => api.post('/users/login', data),
  getMe: () => api.get('/users/me')
};

export default api;