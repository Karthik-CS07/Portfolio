import dotenv from "dotenv";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

dotenv.config();
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;
console.log("connectionString present:", !!connectionString);

// Use the factory API: pass config, not a pre-created Pool
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

try {
  const rows = await prisma.inquiry.findMany({ take: 1 });
  console.log("Prisma findMany OK:", rows);

  const created = await prisma.inquiry.create({
    data: {
      fullName: "Test User",
      email: "test@test.com",
      projectTitle: "Test Project",
      projectDescription: "A test description",
      budget: "1000",
      currency: "₹",
      deadline: null,
    },
  });
  console.log("Prisma create OK:", created);

  // Clean up test record
  await prisma.inquiry.delete({ where: { id: created.id } });
  console.log("Cleanup OK — full flow works!");
} catch (e) {
  console.error("Prisma ERROR:", e.message);
  console.error("Full error:", e);
} finally {
  await prisma.$disconnect();
}
