import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env");
const result = dotenv.config({ path: envPath });

console.log("dotenv path:", envPath);
console.log("dotenv error:", result.error ?? "none");
console.log("dotenv parsed keys:", result.parsed ? Object.keys(result.parsed) : "null");
console.log("DATABASE_URL from parsed:", result.parsed?.DATABASE_URL?.substring(0, 40) + "...");
console.log("DATABASE_URL from process.env:", process.env.DATABASE_URL?.substring(0, 40) + "...");
console.log("All env keys with DB:", Object.keys(process.env).filter(k => k.includes("DATABASE")));
