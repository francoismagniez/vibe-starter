/**
 * Database schema definitions live in this file.
 *
 * Template neutrality note:
 * - This starter ships with **no actual tables** by default.
 * - Add your own tables/enums here, then run:
 *   - `bun run db:generate`
 *   - `bun run db:migrate`
 *
 * The commented example below demonstrates common best practices:
 * - snake_case column names
 * - `uuid` primary key
 * - `createdAt/updatedAt` timestamps
 * - indexes and uniqueness where appropriate
 */

// Re-export common Drizzle (PostgreSQL) schema helpers.
// This keeps imports "clean" (no unused-import lint noise) and provides a handy
// single import surface for your app code.
export {
  // table / columns
  pgTable,
  pgEnum,
  serial,
  bigserial,
  integer,
  bigint,
  boolean,
  text,
  varchar,
  uuid,
  json,
  jsonb,
  timestamp,
  date,
  time,
  numeric,
  doublePrecision,
  real,
  // constraints / indexes
  primaryKey,
  uniqueIndex,
  index,
  foreignKey,
} from "drizzle-orm/pg-core";

/*
// Example (commented out): a typical users table
export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email", { length: 255 }).notNull(),
    name: text("name"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => ({
    emailUnique: uniqueIndex("users_email_unique").on(t.email),
    emailIdx: index("users_email_idx").on(t.email),
  }),
);
*/
