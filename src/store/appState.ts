import { makeAutoObservable } from 'mobx'
import WsClient from '../services/wsClient/wsClient'

export interface IMessage {
  author: string
  date: string
  text: string
  isSended: boolean
}

class AppState {
  counterValue: number = 0
  isMessagesRead: boolean = true
  messages: IMessage[] = []
  onlineUsers: string[] = []
  wsClient: WsClient | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setCounterValue = (payload: number) => {
    this.counterValue = payload
  }

  setIsMessagesRead = (payload: boolean) => {
    this.isMessagesRead = payload
  }

  setMessages = (payload: IMessage[]) => {
    this.messages = payload
  }

  setOnlineUsers = (payload: string[]) => {
    this.onlineUsers = payload
  }

  setWsClient = (payload: WsClient | null) => {
    this.wsClient = payload
  }
}

export default new AppState()
