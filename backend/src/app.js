const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const beritaRoutes = require('./routes/beritaRoutes');
const fasilitasRoutes = require('./routes/fasilitasRoutes');
const translateRoutes = require('./routes/translateRoutes');

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if(!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
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

// Jangan listen di Vercel (serverless), hanya saat development lokal
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
}

module.exports = app;