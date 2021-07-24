import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { Switch } from 'react-router-dom'
import AppIntro from '../components/AppIntro'
import ErrorPopup from '../components/ErrorPopup'
import PcVersionInfo from '../components/PcVersionInfo'
import TransitionCover from '../components/TransitionCover'
import { IS_PC } from '../constants/app-constants'
import { useAppStarter } from '../hooks/useAppStarter'
import { useUserGetHandler } from '../hooks/useUserGetHandler'
import errorState from '../store/errorState'
import Login from '../views/Login'
import Registration from '../views/Registration'
import AuthRoute from './AuthRoute'
import { EPaths } from './constants'
import ContentRoute from './ContentRoute'

const AppRoute: FC = observer(() => {
  useUserGetHandler()
  const isAppStarting = useAppStarter()

  if (IS_PC) {
    return <PcVersionInfo />
  }

  return (
    <>
      <Switch>
        <AuthRoute path={EPaths.login} component={Login} />
        <AuthRoute path={EPaths.registration} component={Registration} />
        <ContentRoute />
      </Switch>
      {errorState.popupsArray.map(({ text, id }) => (
        <ErrorPopup id={id} text={text} key={id} />
      ))}
      <TransitionCover />
      {isAppStarting && <AppIntro />}
    </>
  )
})

export default AppRoute
