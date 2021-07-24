import { timings } from '../constants/transitions-timings'
import { EPaths } from '../router/constants'
import appState from '../store/appState'
import userState from '../store/userState'
import { disconnectWsClient } from './disconnectWsClient'
import { storage } from './storage'

export const logout = () => {
  disconnectWsClient()
  storage.clear()
  appState.transitionCover?.redirect(EPaths.login)

  setTimeout(() => {
    appState.setCounter(0)
    appState.setLastClick('')
    appState.setIsMessagesRead(true)
    appState.setMessages([])
    appState.setOnlineUsers([])
    appState.setIsSettingsActive(false)

    userState.setIsAuthenticated(false)
    userState.setUsername('')
    userState.setId('')
  }, timings.pageTransition / 2)
}
