import appState from '../../store/appState'
import { EWsEventResponseTypes, TWsEvent } from '../../types/wsActions/wsEvent'

export const homeWsHandler = {
  onMessage: (event: TWsEvent) => {
    switch (event.type) {
      case EWsEventResponseTypes.homeMessage:
        appState.setCounter(event.counter)
        appState.setLastClick(event.lastClick)
    }
  },
}
