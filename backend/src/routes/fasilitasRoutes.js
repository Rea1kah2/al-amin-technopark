const router = require('express').Router();
const {getAllFasilitas, createFasilitas, updateFasilitas, deleteFasilitas} = require('../controllers/fasilitasController');
const auth = require('../middleware/auth');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', getAllFasilitas);
router.post('/', auth, upload.single('gambar'), createFasilitas);
router.put('/:id', auth, upload.single('gambar'), updateFasilitas);
router.delete('/:id', auth, deleteFasilitas);

module.exports = router;
