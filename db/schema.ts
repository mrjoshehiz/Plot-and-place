import { sqliteTable,text,integer } from 'drizzle-orm/sqlite-core';
export const records=sqliteTable('records',{id:text('id').primaryKey(),kind:text('kind').notNull(),owner:text('owner'),payload:text('payload').notNull(),createdAt:integer('created_at').notNull()});
