const prisma = require('../config/prisma');
const { streamUpload } = require('../config/cloudinary');

const getAllFasilitas = async (req, res) => {
  try {
    const fasilitas = await prisma.fasilitas.findMany({ orderBy: { urutan: 'asc' } });
    res.json(fasilitas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createFasilitas = async (req, res) => {
  try {
    const { nama, namaEn, deskripsi, deskripsiEn, icon, urutan } = req.body;
    let gambar = null;

    if (req.file) {
      const result = await streamUpload(req.file.buffer, 'alamin-fasilitas');
      gambar = result.secure_url;
    }

    const fasilitas = await prisma.fasilitas.create({
      data: {
        nama,
        namaEn: namaEn || nama,
        deskripsi,
        deskripsiEn: deskripsiEn || deskripsi,
        gambar,
        icon: icon || '',
        urutan: Number(urutan) || 0
      }
    });
    res.status(201).json(fasilitas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateFasilitas = async (req, res) => {
  try {
    const { nama, namaEn, deskripsi, deskripsiEn, icon, urutan } = req.body;
    const data = {
      nama,
      namaEn: namaEn || nama,
      deskripsi,
      deskripsiEn: deskripsiEn || deskripsi,
      icon: icon || '',
      urutan: Number(urutan) || 0
    };

    if (req.file) {
      const result = await streamUpload(req.file.buffer, 'alamin-fasilitas');
      data.gambar = result.secure_url;
    }

    const fasilitas = await prisma.fasilitas.update({
      where: { id: Number(req.params.id) },
      data
    });
    res.json(fasilitas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteFasilitas = async (req, res) => {
  try {
    await prisma.fasilitas.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Fasilitas berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllFasilitas, createFasilitas, updateFasilitas, deleteFasilitas };