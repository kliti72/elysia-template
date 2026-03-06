// drizzle.config.ts — nella root
import { defineConfig } from 'drizzle-kit'

const db = Bun.env.DB_PATH ?? './config/database/app.db'

export default defineConfig({
  schema: './config/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: db
  },
})