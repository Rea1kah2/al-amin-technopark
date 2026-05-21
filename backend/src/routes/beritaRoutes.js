const router = require('express').Router();
const{getAllBerita, getBeritaBySlug, getAllBeritaAdmin, createBerita, updateBerita, deleteBerita} = require('../controllers/beritaController');
const auth = require('../middleware/auth');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', getAllBerita);
router.get('/slug/:slug', getBeritaBySlug);
router.get('/admin/all', auth, getAllBeritaAdmin);
router.post('/', auth, upload.single('gambar'), createBerita);
router.put('/:id', auth, upload.single('gambar'), updateBerita);
router.delete('/:id', auth, deleteBerita);

module.exports = router;