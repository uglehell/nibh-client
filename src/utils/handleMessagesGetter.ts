import { errorMessages } from '../constants/error-messages'
import { getMessages } from '../services/httpRequests/getMessages'
import appState from '../store/appState'
import errorState from '../store/errorState'

export const handleMessagesGetter = async () => {
  const response = await getMessages()

  if (response.ok) {
    appState.setMessages(response.messages)
    return
  }

  const errorId = Date.now()

  errorState.addErrorPopup({ id: errorId, text: errorMessages.unexpectedError })
}
