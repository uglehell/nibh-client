import classNames from 'classnames'
import { FC } from 'react'
import userState from '../../store/userState'
import { timeFormatter } from '../../utils/timeFormatter'
import styles from './Message.module.scss'

interface IMessageProps {
  author: string
  text: string
  createdAt: string
}

export const Message: FC<IMessageProps> = ({ author, text, createdAt }) => {
  const isSended = author === userState.username
  const time = timeFormatter(createdAt)

  return (
    <div className={classNames(styles.container, isSended && styles.container_sended)}>
      <div className={styles.header}>
        <div className={styles.author}>{author}</div>
        <div className={styles.time}>{time}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
