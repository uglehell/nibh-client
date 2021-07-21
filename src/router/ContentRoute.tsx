import { FC } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { EPaths } from './constants'
import Home from '../views/Home'
import Chat from '../views/Chat'
import OnlineUsers from '../views/OnlineUsers'
import { useDefaultPathGenerator } from '../hooks/useDefaultPathGenerator'
import { observer } from 'mobx-react-lite'
import { useAppInitializer } from '../hooks/useAppInitializer'
import SettingsButton from '../components/SettingsButton'
import Settings from '../components/Settings'
import Menu from '../components/Menu'

const ContentRoute: FC = observer(() => {
  useAppInitializer()
  const defaultPath = useDefaultPathGenerator()

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
      <Menu />
      <Settings />
      <SettingsButton />
    </Route>
  )
})

export default ContentRoute
