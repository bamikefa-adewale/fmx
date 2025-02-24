import { sql } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
export const produtctsTable = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  soldBy: text("soldBy").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  currentPrice: integer("currentPrice").notNull(),
  markPrice: integer("markPrice").notNull(),
  user_id: text("user_id"),
  //start category_id,
  categoryId: uuid("category_id")
    .references(() => categories.id, { onDelete: "cascade" })
    .notNull(),
  //end
  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
});
