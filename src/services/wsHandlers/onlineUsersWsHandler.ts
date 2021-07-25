import appState from '../../store/appState'
import { EWsEventResponseTypes, TWsEvent } from '../../types/wsActions/wsEvent'

export const onlineUsersWsHandler = {
  onMessage: (event: TWsEvent) => {
    switch (event.type) {
      case EWsEventResponseTypes.onlineUsersUpdate:
        appState.setOnlineUsers(event.onlineUsers)
    }
  },
}
