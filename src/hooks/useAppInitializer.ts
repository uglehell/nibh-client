import { useEffect } from 'react'
import appState from '../store/appState'
import userState from '../store/userState'
import { connectWsClient } from '../utils/connectWsClient'
import { disconnectWsClient } from '../utils/disconnectWsClient'
import { handleMessagesGetter } from '../utils/handleMessagesGetter'
import { handleOnlineUsersGetter } from '../utils/handleOnlineUsersGetter'

export const useAppInitializer = () => {
  useEffect(() => {
    if (userState.isAuthenticated && !appState.isLoading) {
      connectWsClient()
      handleMessagesGetter()
      handleOnlineUsersGetter()
    }

    return disconnectWsClient
    // WIP
    // eslint-disable-next-line
  }, [userState.isAuthenticated, appState.isLoading])
}
