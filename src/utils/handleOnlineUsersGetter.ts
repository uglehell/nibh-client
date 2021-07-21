import appState from '../store/appState'
import userState from '../store/userState'
import { EWsRequestTypes, IOpenMessageRequest } from '../types/wsActions/wsRequest'

export const handleOnlineUsersGetter = () => {
  if (appState.wsClient?.isReady) {
    const openMessage: IOpenMessageRequest = {
      type: EWsRequestTypes.openMessage,
      id: userState.id,
    }

    appState.wsClient?.send(openMessage)
  }
}
