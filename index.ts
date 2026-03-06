// index.ts
// ⚠️  Non modificare questo file — usa app/routes.ts per registrare le route
import { Elysia } from 'elysia'
import { loadRoutes } from './src/core/loader'
import { routes } from './app/routes'
import { env } from './config/env'

const app = new Elysia()

loadRoutes(app, routes)

app.listen({
  port: env.server.port,
  hostname: env.server.hostname,
})

console.log(
  `\x1b[32m✓\x1b[0m server online  ` +
  `\x1b[36mhttp://${app.server?.hostname}:${app.server?.port}\x1b[0m  ` +
  `\x1b[90m[${env.isProd ? 'production' : 'development'}]\x1b[0m`
)