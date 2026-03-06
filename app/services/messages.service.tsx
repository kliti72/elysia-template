import type { Message } from '../types/message.type';
import * as messagesRepository from '../repositories/messages.repository'

export const healthService = {

  getAll(): Message[] | null {
    return messagesRepository.findAll();
  },

}