# EduNext

EduNext is a full-stack educational platform template built with Next.js, Prisma, MySQL, and Auth.js. It features secure user authentication, easy database integration, and scalable architecture for educational projects.

## Table of Contents

- Features
- Getting Started
- Project Structure
- Configuration
- Usage
- Contributing
- License

## Features

- **Next.js**: A powerful React framework for building server-side rendered and statically generated web applications.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **MySQL**: A popular relational database management system.
- **Auth.js**: Secure user authentication with GitHub and credentials.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL database

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Meenic/edu-next.git
   cd edu-next
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a .env file in the root directory and add the following variables:

   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/database"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   NEXTAUTH_SECRET="your-nextauth-secret"
   ```

4. Run database migrations:

   ```sh
   npx prisma migrate dev
   ```

5. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

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

- **.env**: Environment variables.
- **.next/**: Next.js build output.
- **package.json**: Project dependencies and scripts.
- **prisma/**: Prisma schema and migrations.
- **public/**: Static assets.
- **src/**: Source code.
  - **actions/**: Server-side actions.
  - **app/**: Next.js app directory.
  - **auth.config.ts**: Authentication configuration.
  - **components/**: React components.
  - **data/**: Database access layer.
  - **lib/**: Utility functions and libraries.
  - **middleware.ts**: Custom middleware.
  - **schemas/**: Validation schemas.
- **tailwind.config.ts**: Tailwind CSS configuration.
- **tsconfig.json**: TypeScript configuration.

## Configuration

### Authentication

Authentication is configured in auth.config.ts. It uses GitHub and credentials providers. Update the .env file with your GitHub client ID and secret.

### Database

Prisma is used for database access. The schema is defined in schema.prisma. Update the `DATABASE_URL` in the .env file with your MySQL connection string.

### Tailwind CSS

Tailwind CSS is configured in tailwind.config.ts and imported in globals.css.

## Usage

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

### Building for Production

```sh
npm run build
# or
yarn build
```

### Starting the Production Server

```sh
npm run start
# or
yarn start
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
