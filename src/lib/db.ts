import dotenv from "dotenv";
import path from "path";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// ─── Load .env explicitly ───────────────────────────────────────
// Vite's SSR module system does not automatically load .env for
// server-side process.env access (only VITE_* vars are injected).
// We must call dotenv.config() ourselves before reading DATABASE_URL.
const envPath = path.resolve(process.cwd(), ".env");
dotenv.config({ path: envPath });

// ─── Neon Serverless Driver Setup ───────────────────────────────
// Prisma 7 requires a driver adapter for PrismaClient.
// @prisma/adapter-neon v7 exports PrismaNeon as a factory that takes
// a config object and creates the Pool internally.
neonConfig.webSocketConstructor = ws;

// Singleton pattern prevents multiple Prisma Client instances during HMR in dev.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient(): PrismaClient {
  // Read DATABASE_URL at call time, not module scope, to ensure dotenv has loaded
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Please add it to your .env file.\n" +
        "Get your connection string from https://console.neon.tech",
    );
  }

  // PrismaNeon is a factory: pass the pool config, it creates the Pool internally
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter });
}

// Use a Proxy for lazy initialization to prevent database client creation
// during build-time / static compilation where DATABASE_URL is not available.
let prismaInstance: PrismaClient | undefined;

function getPrisma(): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = globalForPrisma.prisma ?? createPrismaClient();
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = prismaInstance;
    }
  }
  return prismaInstance;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop, receiver) {
    const client = getPrisma();
    const value = Reflect.get(client, prop, receiver);
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

