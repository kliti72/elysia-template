import type { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { messages } from '../../config/schema'

export type Message = InferSelectModel<typeof messages>
