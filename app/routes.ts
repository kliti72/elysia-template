// src/routes.ts
// ✅ Questo è l'unico file da modificare per gestire le route
import type { RouteConfig } from '../src/core/loader'
import { MessagesController } from './controllers/messages.controller'

export const routes: RouteConfig[] = [
  {
    controller: MessagesController,
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