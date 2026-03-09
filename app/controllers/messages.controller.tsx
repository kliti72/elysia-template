// src/modules/health/health.controller.ts
import { Elysia } from 'elysia'
import { MessageService } from '../services/messages.service'

export const MessagesController = new Elysia({ prefix: '/messages' })

  .get('/', () => {
    return MessageService.getAll()
  })