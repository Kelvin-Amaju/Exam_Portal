const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  try {
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12)
    const admin = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        name: 'Admin User',
        password: adminPassword,
        role: 'ADMIN',
      },
    })

    // Create test student
    const studentPassword = await bcrypt.hash('student123', 12)
    const student = await prisma.user.create({
      data: {
        email: 'student@example.com',
        name: 'Test Student',
        password: studentPassword,
        role: 'STUDENT',
      },
    })

    console.log('Seed data created successfully!')
    console.log({
      admin: { email: admin.email, password: 'admin123' },
      student: { email: student.email, password: 'student123' },
    })
  } catch (error) {
    console.error('Error:', error)
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect()
  })