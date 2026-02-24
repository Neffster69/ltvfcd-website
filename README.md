# LTVFD Website

A website for the Local Town Volunteer Fire Department (LTVFD) built with Next.js, TypeScript, and Tailwind CSS. The website provides public information about events, contact forms, basic department information, and staffing. It also includes a secure employee login system for accessing schedules, internal events, and submitting requests.

## Features

- **Public Pages**:
  - Home page with navigation
  - Events page displaying upcoming public events
  - Contact form for inquiries
  - About page with department information
  - Staffing page with team details

- **Employee Dashboard**:
  - Secure login with NextAuth.js
  - View personal schedule
  - Access to all events (public and internal)
  - Submit and manage requests

- **Technology Stack**:
  - Next.js 16 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - NextAuth.js for authentication
  - Drizzle ORM with SQLite for database
  - React Hook Form for forms

## Getting Started

First, install dependencies:

```bash
npm install
```

Set up the database:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file with:

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Database

The project uses SQLite with Drizzle ORM. To reset the database:

```bash
rm dev.db
npx drizzle-kit generate
npx drizzle-kit migrate
```

## Security Notes

- Passwords are hashed with bcryptjs
- Authentication uses JWT tokens
- Middleware protects employee routes
- Input validation on forms
- Use HTTPS in production

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [NextAuth.js Documentation](https://next-auth.js.org)
