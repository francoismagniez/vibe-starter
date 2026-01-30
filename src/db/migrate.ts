import { migrate } from "drizzle-orm/node-postgres/migrator";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function loadEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, "utf8");

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;

    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (!key || process.env[key] !== undefined) continue;

    // strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

async function main() {
  // Bun scripts don't automatically load Next.js-style `.env.local`.
  loadEnvFile(path.join(process.cwd(), ".env.local"));
  loadEnvFile(path.join(process.cwd(), ".env"));

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Add it to .env.local or export it, then try again.");
    process.exitCode = 1;
    return;
  }

  const migrationsFolder = path.join(path.dirname(fileURLToPath(import.meta.url)), "migrations");

  const { db, pool } = await import("./index");

  try {
    await migrate(db, { migrationsFolder });
    console.log("Database migrations applied successfully.");
  } catch (err) {
    console.error("Database migration failed.");
    console.error(err);
    process.exitCode = 1;
  } finally {
    try {
      await pool.end();
    } catch (err) {
      console.error("Failed to close PostgreSQL pool cleanly.");
      console.error(err);
    }
  }
}

void main();
