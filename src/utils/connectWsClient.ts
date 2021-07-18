import WsClient from '../services/wsClient/wsClient'
import {
  onCloseHandler,
  onErrorHandler,
  onMessageHandler,
} from '../services/wsHandlers'
import appState from '../store/appState'

export const connectWsClient = () => {
  appState.setWsClient(new WsClient())

  appState.wsClient?.onMessage(onMessageHandler)
  appState.wsClient?.onClose(onCloseHandler)
  appState.wsClient?.onError(onErrorHandler)
}
