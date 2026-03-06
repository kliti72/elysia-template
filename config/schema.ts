import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const messages = sqliteTable('messages', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    text: text('text').notNull(),
    createdAt: text('created_at').notNull().default(sql`(datetime('now'))`)
})