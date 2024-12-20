# EduNext

EduNext is a versatile full-stack template designed for new developers. Built with Next.js, Prisma, MySQL, and Auth.js, it offers an easy-to-use foundation to kickstart development projects with secure authentication, scalable architecture, and modern tools.

## 🚀 Features

- **Next.js**: Server-side rendering and static generation.
- **Prisma**: Modern database toolkit.
- **MySQL**: Relational database system.
- **Auth.js**: GitHub and credentials-based authentication.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Strongly typed JavaScript.

## 🛠 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MySQL database

### Setup

1. Clone the repo and install dependencies:

   ```sh
   git clone https://github.com/Meenic/edu-next.git
   cd edu-next
   npm install
   # or
   yarn install
   ```

2. Create a `.env` file and configure environment variables:

   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/database"
   GITHUB_CLIENT_ID="your-client-id"
   GITHUB_CLIENT_SECRET="your-client-secret"
   NEXTAUTH_SECRET="your-secret"
   ```

3. Run database migrations:

   ```sh
   npx prisma migrate dev
   ```

4. Start the dev server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   Access at [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```plaintext
.env
.gitignore
.next/
package.json
prisma/
  schema.prisma
public/
src/
  actions/
  app/
  auth.config.ts
  components/
  data/
  lib/
  middleware.ts
  schemas/
tailwind.config.ts
tsconfig.json
```

## ⚙️ Configuration

- **Auth**: Configure in `auth.config.ts` with `.env` values.
- **Database**: Prisma schema in `schema.prisma`. Update `DATABASE_URL`.
- **Tailwind CSS**: Config in `tailwind.config.ts`.

## 🧾 Commands

- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`

## 🤝 Contributing

Contributions are welcome! Open an issue or pull request.

## 📜 License

MIT License. See `LICENSE` for details.
