import { IMessage } from '../../store/appState'

interface IGetAppDataSuccess {
  ok: true
  messages: IMessage[]
  counterValue: number
}

export interface IGetAppDataError {
  ok: false,
  message?: string
}

export type TGetAppDataResponse = IGetAppDataSuccess | IGetAppDataError
