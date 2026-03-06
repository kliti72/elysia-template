const isProd = process.env.NODE_ENV === 'production'

function required(key: string): string {
  const val = process.env[key]
  if (!val) throw new Error(`[env] variabile mancante: ${key}`)
  return val
}

function optional(key: string, fallback: string): string {
  return process.env[key] ?? fallback
}

export const env = {
  isProd,
  isDev: !isProd,

  server: {
    port:     Number(optional('PORT', '3000')),
    hostname: isProd ? '0.0.0.0' : '127.0.0.1',
  },

  db: {
    path: optional('DB_PATH', './config/database/app.db'),
  },

  // in prod alcune variabili diventano obbligatorie
  // jwt: {
  //   secret: isProd ? required('JWT_SECRET') : optional('JWT_SECRET', 'dev-secret'),
  // },
}