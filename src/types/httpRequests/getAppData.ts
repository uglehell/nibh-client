import { IMessage } from '../../store/appState'

interface IGetAppDataSuccess {
  ok: true
  onlineUsers: string[]
  messages: IMessage[]
  counterValue: number
}

export interface IGetAppDataError {
  ok: false
}

export type TGetAppDataResponse = IGetAppDataSuccess | IGetAppDataError
