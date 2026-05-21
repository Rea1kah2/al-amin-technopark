const {PrismaClient} = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main(){
    const password = await bcrypt.hash('admin123', 10);
    const admin = await prisma.admin.upsert({
        where: {email: 'admin@alamin.ac.id'},
        update: {},
        create: {
            nama: 'Admin Al Amin',
            email: 'admin@alamin.ac.id',
            password,
        },
    });
    console.log('Admin berhasil dibuat: ', admin.email);
    console.log('Password: admin123');
}

main().catch(console.error).finally(() => prisma.$disconnect());