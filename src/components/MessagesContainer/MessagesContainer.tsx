import { FC } from 'react'
import appState from '../../store/appState'
import { Message } from '../Message/Message'
import styles from './MessagesContainer.module.scss'

export const MessagesContainer: FC = () => (
  <div className={styles.container}>
    {appState.messages.map(({ author, createdAt, id, text }) => (
      <Message key={id} author={author} text={text} createdAt={createdAt} />
    ))}
  </div>
)
