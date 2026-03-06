// src/modules/health/health.controller.ts
import { Elysia } from 'elysia'
import { healthService } from '../services/messages.service'

export const healthController = new Elysia({ prefix: '/messages' })

  .get('/', () => {
    return healthService.getAll()
  })