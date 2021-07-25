import { IOnlineUser } from '../../store/appState'

export enum EWsEventResponseTypes {
  onlineUsersUpdate = 'online_users_update',
  homeMessage = 'home_message',
  newMessage = 'new_message',
}

interface IOnlineUsersUpdateResponse {
  type: EWsEventResponseTypes.onlineUsersUpdate
  onlineUsers: IOnlineUser[]
}

interface IHomeMessageResponse {
  type: EWsEventResponseTypes.homeMessage
  counter: number
  lastClick: string
}

export interface INewMessageResponse {
  type: EWsEventResponseTypes.newMessage
  id: string
  text: string
  author: string
  createdAt: string
  authorId: string
}

export type TWsEvent = IOnlineUsersUpdateResponse | IHomeMessageResponse | INewMessageResponse
