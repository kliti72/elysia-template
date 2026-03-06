// src/routes.ts
// ✅ Questo è l'unico file da modificare per gestire le route
import type { RouteConfig } from '../src/core/loader'
import { healthController } from './controller/messages.controller'

export const routes: RouteConfig[] = [
  {
    controller: healthController,
    enabled: true,
    middleware: [],
  },

  // esempio con middleware:
  // {
  //   controller: messagesController,
  //   enabled: true,
  //   middleware: [loggerMiddleware, authMiddleware],
  // },
]