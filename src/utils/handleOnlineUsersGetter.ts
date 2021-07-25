import appState from '../store/appState'
import userState from '../store/userState'
import { EWsRequestTypes, IOpenMessageRequest } from '../types/wsActions/wsRequest'

export const handleOnlineUsersGetter = () => {
  const isReady = appState.wsClient?.client.readyState === 1

  if (isReady) {
    const openMessage: IOpenMessageRequest = {
      type: EWsRequestTypes.openMessage,
      id: userState.id,
    }
    appState.wsClient?.send(openMessage)
  }
}
