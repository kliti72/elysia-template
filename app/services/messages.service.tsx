import * as messagesRepository from '../repositories/messages.repository'
import type { Message } from "../types/message.type"

export const MessageService = {

  getAll(): Message[] | null {
    return messagesRepository.findAll();
  },

}