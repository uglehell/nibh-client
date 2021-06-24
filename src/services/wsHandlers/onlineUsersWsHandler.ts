import appState from '../../store/appState'
import userState from '../../store/userState'
import { EWsEventResponseTypes, TWsEvent } from '../../types/wsActions/wsEvent'
import { EWsRequestTypes, IOpenMessageRequest } from '../../types/wsActions/wsRequest'

export const onlineUsersWsHandler = {
  onMessage: (event: TWsEvent) => {
    console.log(event) // WIP

    switch (event.type) {
      case EWsEventResponseTypes.onlineUsersUpdate:
        appState.setOnlineUsers(event.onlineUsers)
    }
  },
  onOpen: (event: Event) => {
    const openMessage: IOpenMessageRequest = {
      type: EWsRequestTypes.openMessage,
      username: userState.username,
    }

    appState.wsClient?.send(openMessage)
  },
}
