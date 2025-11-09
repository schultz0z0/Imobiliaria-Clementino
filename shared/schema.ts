import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const serviceInterests = pgTable("service_interests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  service: text("service").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertServiceInterestSchema = createInsertSchema(serviceInterests)
  .pick({
    service: true,
    name: true,
    email: true,
    phone: true,
    message: true,
  })
  .extend({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
    email: z.string().email("Email inválido").max(100, "Email muito longo"),
    phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos").max(20, "Telefone muito longo"),
    message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
    service: z.string().min(1, "Serviço é obrigatório").max(100, "Nome do serviço muito longo"),
  });

export type InsertServiceInterest = z.infer<typeof insertServiceInterestSchema>;
export type ServiceInterest = typeof serviceInterests.$inferSelect;
