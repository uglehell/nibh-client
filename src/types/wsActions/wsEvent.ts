export enum EWsEventResponseTypes {
  onlineUsersUpdate = 'online_users_update',
}

interface IOnlineUsersUpdateResponse {
  type: EWsEventResponseTypes.onlineUsersUpdate,
  onlineUsers: string[]
}

export type TWsEvent = IOnlineUsersUpdateResponse
