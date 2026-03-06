// drizzle.config.ts — nella root
import { defineConfig } from 'drizzle-kit'
import { env } from './config/env'

export default defineConfig({
  schema: './config/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: env.db.path ?? 'app.db',
  },
})