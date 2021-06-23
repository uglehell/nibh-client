import { FC } from 'react'
import { Switch } from 'react-router-dom'
import Login from '../views/Login'
import Registration from '../views/Registration'
import AuthRoute from './AuthRoute'
import { EPaths } from './constants'
import ContentRoute from './ContentRoute'

const AppRoute: FC = () => (
  <Switch>
    <AuthRoute path={EPaths.login} component={Login} />
    <AuthRoute path={EPaths.registration} component={Registration} />
    <ContentRoute />
  </Switch>
)

export default AppRoute
