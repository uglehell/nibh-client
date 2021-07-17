import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { EPageNames } from '../../constants/app-constants'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import appState from '../../store/appState'

export const OnlineUsers: FC = observer(() => {
  useTitleSetter(EPageNames.onlineUsers)

  return (
    <div>
      <div>Online users</div>
      <ul>
        {appState.onlineUsers.map(({ username, id }) => (
          <li key={id}>{username}</li>
        ))}
      </ul>
    </div>
  )
})
