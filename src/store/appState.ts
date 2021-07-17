import { makeAutoObservable } from 'mobx'
import { TransitionCover } from '../hooks/useTransitionCover'
import WsClient from '../services/wsClient/wsClient'

export interface IMessage {
  author: string
  createdAt: string
  text: string
  id: string
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
  transitionCover: TransitionCover | null = null

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

  setTransitionCover = (payload: TransitionCover) => {
    this.transitionCover = payload
  }
}

export default new AppState()
