const router = require('express').Router();
const {register, login, getMe} = require('../controllers/userController');
const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message: 'Token tidak ditemukan'});
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch  {
        res.status(401).json({message: 'Token tidak valid'});
    }
};

router.post('/register', register);
router.post('/login', login);
router.get('/me', userAuth, getMe);

module.exports = router;