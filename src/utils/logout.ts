import { timings } from '../constants/transitions-timings'
import { EPaths } from '../router/constants'
import appState from '../store/appState'
import userState from '../store/userState'
import { disconnectWsClient } from './disconnectWsClient'

export const logout = () => {
  disconnectWsClient()
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
