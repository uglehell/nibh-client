import { FC } from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import userState from '../store/userState'
import { EPaths } from './constants'

interface IPrivateRouteProps {
  component: React.FC<RouteComponentProps>
  path: string
  exact?: boolean
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ component: Component, children, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !userState.isAuthenticated ? <Redirect to={EPaths.login} /> : <Component {...props} />
    }
  />
)

export default PrivateRoute
