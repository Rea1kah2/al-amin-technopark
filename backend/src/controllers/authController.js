const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const admin = await prisma.admin.findUnique({where: {email}});
        if(!admin) return res.status(401).json({message: 'Email atau Password salah'});

        const valid = await bcrypt.compare(password, admin.password);
        if(!valid) return res.status(401).json({message: 'Email atau Password salah'});

        const token = jwt.sign(
            {id: admin.id, email: admin.email, nama: admin.nama},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        );

        res.json({token, admin: {id: admin.id, nama: admin.nama, email: admin.email}});
    } catch (err) {
        res.status(500).json({message: 'Server error'})
    }
};

const getMe = async(req, res) => {
    res.json({admin: req.admin});
};

module.exports = {login, getMe};