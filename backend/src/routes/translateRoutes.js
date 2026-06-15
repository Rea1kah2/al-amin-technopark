const router = require('express').Router();
const auth = require('../middleware/auth');
const { translateToEnglish } = require('../utils/translate');

router.post('/', auth, async (req, res) => {
  try {
    const { texts } = req.body;
    if (!texts || typeof texts !== 'object') {
      return res.status(400).json({ message: 'Field texts (object) wajib diisi' });
    }
    const translated = await translateToEnglish(texts);
    res.json({ translated });
  } catch (err) {
    console.error('Translation error:', err.message);
    res.status(500).json({ message: 'Gagal menerjemahkan: ' + err.message });
  }
});

module.exports = router;