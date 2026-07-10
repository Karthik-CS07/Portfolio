import { Pool } from "@neondatabase/serverless";

// Check the version
const pkg = await import("@neondatabase/serverless/package.json", { with: { type: "json" } });
console.log("@neondatabase/serverless version:", pkg.default.version);

// Check what Pool's constructor looks like
const p = new Pool({ connectionString: "postgresql://test:test@test.com/test" });
console.log("Pool options type check - pool._options:", JSON.stringify(p));
