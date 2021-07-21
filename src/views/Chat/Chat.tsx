import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import { EPageNames } from '../../constants/app-constants'
import styles from './Chat.module.scss'
import MessagesContainer from '../../components/MessagesContainer'
import ChatScrollButton from '../../components/ChatScrollButton'
import MessageInputField from '../../components/MessageInputField'

export const Chat: FC = observer(() => {
  useTitleSetter(EPageNames.chat)

  return (
    <div className={styles.container}>
      <MessagesContainer />
      <ChatScrollButton />
      <MessageInputField />
    </div>
  )
})
