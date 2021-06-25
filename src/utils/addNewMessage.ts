import appState, { IMessage } from '../store/appState'
import { INewMessageResponse } from '../types/wsActions/wsEvent'

export const addNewMessage = ({ author, text, id, createdAt }: INewMessageResponse) => {
  const message: IMessage = {
    author,
    text,
    id,
    createdAt,
  }

  appState.setMessages([...appState.messages, message])
}
