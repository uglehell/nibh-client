import { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useDefaultPathGenerator } from '../hooks/useDefaultPathGenerator'
import AuthRoute from './AuthRoute'
import ContentRoute from './ContentRoute'

const AppRoute: FC = () => {
  return (
    <>
      <AuthRoute />
      <ContentRoute />
      <Route>
        <Redirect to={useDefaultPathGenerator()} />
      </Route>
    </>
  )
}

export default AppRoute
