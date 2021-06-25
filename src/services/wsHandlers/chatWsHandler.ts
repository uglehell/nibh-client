import { EWsEventResponseTypes, TWsEvent } from '../../types/wsActions/wsEvent'
import { addNewMessage } from '../../utils/addNewMessage'

export const chatWsHandler = {
  onMessage: (event: TWsEvent) => {
    switch (event.type) {
      case EWsEventResponseTypes.newMessage:
        addNewMessage(event)
    }
  },
}
