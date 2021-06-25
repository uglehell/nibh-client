import { IMessage } from '../../store/appState'

interface IGetMessages {
  ok: true
  messages: IMessage[]
}

export interface IGetMessagesError {
  ok: false
  message?: string
}

export type TGetMessagesResponse = IGetMessages | IGetMessagesError
