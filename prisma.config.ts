// ─── Prisma 7 Configuration ─────────────────────────────────────
// This file configures Prisma CLI (migrate, db push, generate, etc.)
// The DATABASE_URL is read from .env via dotenv.
// See: https://pris.ly/d/config-datasource

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // ⚠️ Set DATABASE_URL in your .env file with your Neon PostgreSQL connection string
    // Uses process.env so that `prisma generate` works even without a DB URL set.
    // Migrations and db push still require the URL to be present.
    url: process.env.DATABASE_URL ?? "",
  },
});
