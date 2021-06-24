import { IOnlineUser } from "../../store/appState";

export enum EWsEventResponseTypes {
  onlineUsersUpdate = 'online_users_update',
  homeMessage = 'home_message',
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

export type TWsEvent = IOnlineUsersUpdateResponse | IHomeMessageResponse
