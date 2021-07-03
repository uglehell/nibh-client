import { getMessages } from '../services/httpRequests/getMessages'
import appState from '../store/appState'

export const handleMessageGetter = async () => {
  const response = await getMessages()

  if (response.ok) {
    appState.setMessages(response.messages)
  }
}
