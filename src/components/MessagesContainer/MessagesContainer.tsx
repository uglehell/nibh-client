import { observer } from 'mobx-react-lite'
import { useCallback, FC, useRef } from 'react'
import { useMessagesContainerHandler } from '../../hooks/useMessagesContainerHandler'
import appState from '../../store/appState'
import { Message } from '../Message/Message'
import styles from './MessagesContainer.module.scss'

export const MessagesContainer: FC = observer(() => {
  const placeholderRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback((isAuto = false) => {
    placeholderRef.current?.scrollIntoView({ behavior: isAuto ? 'auto' : 'smooth' })
  }, [])

  useMessagesContainerHandler({
    scrollToBottom,
  })

  return (
    <div className={styles.container}>
      {appState.messages.map(({ author, createdAt, id, text }) => (
        <Message key={id} author={author} text={text} createdAt={createdAt} />
      ))}
      <div className={styles.placeholder} ref={placeholderRef}></div>
      {/* WIP */}
      {/* <ChatScrollButton isActive={!isMessageFieldActive} scrollToBottom={scrollToBottom} /> */}
    </div>
  )
})
