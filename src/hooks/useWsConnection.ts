import { useEffect } from 'react'
import WsClient from '../services/wsClient/wsClient'
import {
  onCloseHandler,
  onErrorHandler,
  onMessageHandler,
  onOpenHandler,
} from '../services/wsHandlers'
import appState from '../store/appState'

export const useWsConnection = () => {
  useEffect(() => {
    appState.setWsClient(new WsClient())

    appState.wsClient?.onOpen(onOpenHandler)
    appState.wsClient?.onMessage(onMessageHandler)
    appState.wsClient?.onClose(onCloseHandler)
    appState.wsClient?.onError(onErrorHandler)

    return () => {
      appState.setWsClient(null)
    }
  }, [])
}
