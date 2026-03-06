import { db } from '../../config/db'
import { messages } from '../../config/schema'
import type { Message } from '../types/message.type'

export function findAll(): Message[] {
  return db.select().from(messages).all()
}