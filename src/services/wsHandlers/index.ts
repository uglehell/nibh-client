import { TWsEvent } from '../../types/wsActions/wsEvent'
import { chatWsHandler } from './chatWsHandler'
import { homeWsHandler } from './homeWsHandler'
import { onlineUsersWsHandler } from './onlineUsersWsHandler'

export const onMessageHandler = (event: TWsEvent) => {
  homeWsHandler.onMessage(event)
  chatWsHandler.onMessage(event)
  onlineUsersWsHandler.onMessage(event)
}

export const onErrorHandler = (event: Event) => {}

export const onCloseHandler = (event: Event) => {}
