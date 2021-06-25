import { useEffect } from 'react'
import { getMessages } from '../services/httpRequests/getMessages'
import appState from '../store/appState'

export const useMessagesGetter = () => {
  useEffect(() => {
    ;(async () => {
      const response = await getMessages()

      if (response.ok) {
        appState.setMessages(response.messages)
      }
    })()
  }, [])
}
