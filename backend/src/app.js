const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const beritaRoutes = require('./routes/beritaRoutes');
const fasilitasRoutes = require('./routes/fasilitasRoutes');
const translateRoutes = require('./routes/translateRoutes');

const app = express();

app.get('/debug-env', (req, res) => {
  const actual = process.env.FRONTEND_URL || '';
  const expected = 'https://al-amin-technopark.vercel.app';
  res.json({
    actual,
    expected,
    matches: actual === expected,
    actual_length: actual.length,
    expected_length: expected.length,
    actual_charCodes: actual.split('').map(c => c.charCodeAt(0)),
    expected_charCodes: expected.split('').map(c => c.charCodeAt(0)),
  });
});

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Al Amin Techno Park API is running!' }));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/berita', beritaRoutes);
app.use('/api/fasilitas', fasilitasRoutes);
app.use('/api/translate', translateRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan server' });
});

const PORT = process.env.PORT || 5000;

if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
}

module.exports = app;// redeploy trigger Wed Jun 17 11:45:47 WIB 2026
