import { sql } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// products table
export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  soldBy: text("soldBy").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  currentPrice: integer("currentPrice").notNull(),
  markPrice: integer("markPrice").notNull(),
  user_id: uuid("user_id"),
  category_Id: uuid("category_id")
    .references(() => categories.id, { onDelete: "cascade" })
    .notNull(),

  created_at: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
  images: jsonb("images"),
});

//categories table
export const categories = pgTable("categories", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull().unique(),
});
