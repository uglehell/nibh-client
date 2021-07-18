import { useEffect } from 'react'
import appState from '../store/appState'
import userState from '../store/userState'
import { EWsRequestTypes, IOpenMessageRequest } from '../types/wsActions/wsRequest'

export const useOnlineUsersGetter = () => {
  useEffect(() => {
    if (userState.id && appState.wsClient?.isReady) {
      const openMessage: IOpenMessageRequest = {
        type: EWsRequestTypes.openMessage,
        id: userState.id,
      }

      appState.wsClient?.send(openMessage)
    }
    // WIP
    // eslint-disable-next-line
  }, [userState.id, appState.wsClient])
}
