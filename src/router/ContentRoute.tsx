import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useWsConnection } from '../hooks/useWsConnection'
import { EPaths } from './constants'

const ContentRoute: FC = () => {
  useWsConnection()

  return (
    <Switch>
      <Route path={EPaths.home} />
      <Route path={EPaths.chat} />
      <Route path={EPaths.users} />
    </Switch>
  )
}

export default ContentRoute
