import { FC } from 'react'
import appState from '../../store/appState'
import styles from './OnlineUsersList.module.scss'

export const OnlineUsersList: FC = () => (
  <ul className={styles.container}>
    {appState.onlineUsers.map(({ username, id }) => (
      <li key={id} className={styles.user}>
        {username}
      </li>
    ))}
  </ul>
)
