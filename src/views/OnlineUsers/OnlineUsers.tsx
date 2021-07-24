import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import OnlineUsersList from '../../components/OnlineUsersList'
import { EPageNames } from '../../constants/app-constants'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import styles from './OnlineUsers.module.scss'

export const OnlineUsers: FC = observer(() => {
  useTitleSetter(EPageNames.onlineUsers)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Users online</h2>
      <OnlineUsersList />
    </div>
  )
})
