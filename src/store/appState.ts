import { makeAutoObservable } from 'mobx'
import WsClient from '../services/wsClient/wsClient'

export interface IMessage {
  author: string
  date: string
  text: string
  isSended: boolean
}

export interface IOnlineUser {
  username: string
  id: string
}

class AppState {
  counter = 0
  lastClick = ''
  isMessagesRead = true
  messages: IMessage[] = []
  onlineUsers: IOnlineUser[] = []
  wsClient: WsClient | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setCounter = (payload: number) => {
    this.counter = payload
  }

  setLastClick = (payload: string) => {
    this.lastClick = payload
  }

  setIsMessagesRead = (payload: boolean) => {
    this.isMessagesRead = payload
  }

  setMessages = (payload: IMessage[]) => {
    this.messages = payload
  }

  setOnlineUsers = (payload: IOnlineUser[]) => {
    this.onlineUsers = payload
  }

  setWsClient = (payload: WsClient | null) => {
    this.wsClient = payload
  }
}

export default new AppState()
