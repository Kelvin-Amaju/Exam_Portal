

# Exam Portal

A web-based examination system built with Next.js that allows administrators to create and manage online exams while students can take tests and view their results.

## Features

### Admin Panel
- Create and manage exams
- Add/edit questions and answers
- View registered students
- Monitor exam results
- Generate result PDFs
- Send results to students

### Student Panel
- Register and login
- Take online exams
- View exam history
- Download result certificates
- Real-time score calculation

## Tech Stack

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Next.js API Routes
- **Database:** MySQL with Prisma ORM
- **Authentication:** NextAuth.js
- **State Management:** React Query
- **PDF Generation:** pdf-lib

## Getting Started

### Prerequisites
- Node.js 16.x or later
- MySQL database
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/kelvin-amaju/exam-portal.git
cd exam-portal
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Update the `.env` file with your database credentials and other configurations.

4. Set up the database
```bash
npx prisma db push
npx prisma generate
npm run seed
```

5. Start the development server
```bash
npm run dev
```

### Default Login Credentials

```
Admin:
Email: admin@example.com
Password: admin123

Student:
Email: student@example.com
Password: student123
```

## Project Structure

```
exam-portal/
├── src/
│   ├── app/
│   │   ├── admin/     # Admin panel routes
│   │   ├── student/   # Student panel routes
│   │   └── api/       # API routes
│   ├── components/    # Reusable components
│   ├── lib/          # Utilities and configurations
│   └── types/        # TypeScript type definitions
├── prisma/
│   └── schema.prisma  # Database schema
└── public/           # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js Documentation
- Prisma Documentation
- TailwindCSS Documentation
- NextAuth.js Documentation

## Contact

Project Link: [https://github.com/kelvin-amaju/exam-portal](https://github.com/kelvin-amaju/exam-portal)

---

**Note:** This project is under development. Feel free to contribute or report issues.