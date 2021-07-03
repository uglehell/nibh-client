import { FC } from 'react'
import { Switch } from 'react-router-dom'
import { useUserGetHandler } from '../hooks/useUserGetHandler'
import errorState from '../store/errorState'
import Login from '../views/Login'
import Registration from '../views/Registration'
import AuthRoute from './AuthRoute'
import { EPaths } from './constants'
import ContentRoute from './ContentRoute'
import ErrorPopup from '../components/ErrorPopup'

const AppRoute: FC = () => {
  useUserGetHandler()
  errorState.addErrorPopup({
    element: <ErrorPopup isActive text="test" key={Date.now()} />,
    id: Date.now(),
  })

  return (
    <>
      {errorState.popupsArray.map((popup) => popup.element)}
      <Switch>
        <AuthRoute path={EPaths.login} component={Login} />
        <AuthRoute path={EPaths.registration} component={Registration} />
        <ContentRoute />
      </Switch>
    </>
  )
}

export default AppRoute
