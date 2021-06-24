import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import appState from '../../store/appState'

export const OnlineUsers: FC = observer(() => (
  <div>
    <div>Online users</div>
    <ul>
      {appState.onlineUsers.map(({ username, id }) => (
        <li key={id}>{username}</li>
      ))}
    </ul>
  </div>
))
