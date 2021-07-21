import { errorMessages } from '../../constants/error-messages'
import errorState from '../../store/errorState'
import { TWsEvent } from '../../types/wsActions/wsEvent'
import { chatWsHandler } from './chatWsHandler'
import { homeWsHandler } from './homeWsHandler'
import { onlineUsersWsHandler } from './onlineUsersWsHandler'

export const onMessageHandler = (event: TWsEvent) => {
  homeWsHandler.onMessage(event)
  chatWsHandler.onMessage(event)
  onlineUsersWsHandler.onMessage(event)
}

export const onErrorHandler = (event: Event) => {
  const errorId = Date.now()

  errorState.addErrorPopup({ id: errorId, text: errorMessages.unexpectedError })
}

export const onCloseHandler = (event: Event) => {}
