import appState from "../store/appState"
import userState from "../store/userState"
import { disconnectWsClient } from "./disconnectWsClient"

export const logout = () => {
  disconnectWsClient()

  appState.setCounter(0)
  appState.setLastClick('')
  appState.setIsMessagesRead(true)
  appState.setMessages([])
  appState.setOnlineUsers([])

  userState.setIsAuthenticated(false)
  userState.setUsername('')
  userState.setId('')
}