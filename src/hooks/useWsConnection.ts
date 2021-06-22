import { useEffect } from 'react'
import WsClient from '../services/wsClient/wsClient'
import appState from '../store/appState'

export const useWsConnection = () => {
  useEffect(() => {
    appState.setWsClient(new WsClient())

    appState.wsClient?.onOpen(() => {
      appState.wsClient?.send({ type: 'test' })
      console.log('sended')
    })
  }, [])
}
