const prisma = require('../config/prisma');

const slugify = (text) => {
  return text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    + '-' + Date.now();
};

const getAllBerita = async (req, res) => {
  try {
    const { kategori, page = 1, limit = 6, search } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where = { diterbitkan: true };
    if (kategori && kategori !== 'Semua') where.kategori = kategori;
    if (search) where.judul = { contains: search, mode: 'insensitive' };

    const [berita, total] = await Promise.all([
      prisma.berita.findMany({ where, skip, take: Number(limit), orderBy: { createdAt: 'desc' } }),
      prisma.berita.count({ where })
    ]);
    res.json({ berita, total, totalPages: Math.ceil(total / Number(limit)) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBeritaBySlug = async (req, res) => {
  try {
    const berita = await prisma.berita.findUnique({ where: { slug: req.params.slug } });
    if (!berita) return res.status(404).json({ message: 'Berita tidak ditemukan' });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllBeritaAdmin = async (req, res) => {
  try {
    const berita = await prisma.berita.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(berita);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBerita = async (req, res) => {
  try {
    const { judul, konten, kategori, penulis, diterbitkan } = req.body;
    let gambar = null;

    if (req.file) {
      const cloudinary = require('../config/cloudinary');
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'alamin-berita'
      });
      gambar = result.secure_url;
    }

    const berita = await prisma.berita.create({
      data: {
        judul,
        judulEn: judul,         
        slug: slugify(judul),
        konten,
        kontenEn: konten,        
        kategori: kategori || 'Kegiatan',
        penulis: penulis || 'Al Amin Techno Park',
        diterbitkan: diterbitkan === 'true',
        gambar
      }
    });
    res.status(201).json(berita);
  } catch (err) {
    console.error('CREATE BERITA ERROR:', err);
    res.status(500).json({ message: err.message });
  }
};

const updateBerita = async (req, res) => {
  try {
    const { judul, konten, kategori, penulis, diterbitkan } = req.body;
    const data = {
      judul,
      judulEn: judul,           
      konten,
      kontenEn: konten,     
      kategori,
      penulis,
      diterbitkan: diterbitkan === 'true'
    };

    if (req.file) {
      const cloudinary = require('../config/cloudinary');
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'alamin-berita'
      });
      data.gambar = result.secure_url;
    }

    const berita = await prisma.berita.update({
      where: { id: Number(req.params.id) },
      data
    });
    res.json(berita);
  } catch (err) {
    console.error('UPDATE BERITA ERROR:', err);
    res.status(500).json({ message: err.message });
  }
};

const deleteBerita = async (req, res) => {
  try {
    await prisma.berita.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Berita berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllBerita, getBeritaBySlug, getAllBeritaAdmin, createBerita, updateBerita, deleteBerita };