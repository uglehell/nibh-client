import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { EPaths } from './constants'

const AuthRoute: FC = () => {
  return (
    <Switch>
      <Route path={EPaths.login} />
      <Route path={EPaths.registration} />
    </Switch>
  )
}

export default AuthRoute
