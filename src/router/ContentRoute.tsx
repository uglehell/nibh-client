import { FC } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useWsConnection } from '../hooks/useWsConnection'
import PrivateRoute from './PrivateRoute'
import { EPaths } from './constants'
import Home from '../views/Home'
import Chat from '../views/Chat'
import OnlineUsers from '../views/OnlineUsers'
import { useDefaultPathGenerator } from '../hooks/useDefaultPathGenerator'

const ContentRoute: FC = () => {
  const defaultPath = useDefaultPathGenerator()
  useWsConnection()

  return (
    <Route>
      <Switch>
        <PrivateRoute path={EPaths.home} component={Home} exact />
        <PrivateRoute path={EPaths.chat} component={Chat} />
        <PrivateRoute path={EPaths.onlineUsers} component={OnlineUsers} />
        <Route>
          <Redirect to={defaultPath} />
        </Route>
      </Switch>
    </Route>
  )
}

export default ContentRoute
