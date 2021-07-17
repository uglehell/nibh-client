import { useEffect } from 'react'
import userState from '../store/userState'
import { connectWsClient } from '../utils/connectWsClient'
import { disconnectWsClient } from '../utils/disconnectWsClient'
import { handleMessageGetter } from '../utils/handleMessagesGetter'

export const useAppInitializer = () => {
  useEffect(() => {
    if (userState.isAuthenticated) {
      connectWsClient()
      handleMessageGetter()
    }

    return disconnectWsClient
    // WIP
    // eslint-disable-next-line
  }, [userState.isAuthenticated])
}
