import appState, { IMessage } from '../store/appState'
import { INewMessageResponse } from '../types/wsActions/wsEvent'

export const addNewMessage = ({ author, text, id, createdAt, authorId }: INewMessageResponse) => {
  const message: IMessage = {
    author,
    text,
    id,
    createdAt,
    authorId,
  }

  appState.setMessages([...appState.messages, message])
}
