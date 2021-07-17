import { FC, useState } from 'react'
import { EPaths } from '../../router/constants'
import { login } from '../../services/httpRequests/login'
import { storage } from '../../utils/storage'
import { ACCESS_TOKEN } from '../../constants/storage'
import userState from '../../store/userState'
import authState from '../../store/authState'
import AuthWrapper from '../../components/AuthWrapper'
import { IAuthFormValues } from '../../components/AuthWrapper/AuthWrapper'
import { handleAuthError } from '../../utils/handleAuthError'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import appState from '../../store/appState'
import { EPageNames } from '../../constants/app-constants'

export const Login: FC = () => {
  const [loginError, setLoginError] = useState('')

  const handleSubmit = async ({ username, password }: IAuthFormValues) => {
    const loginResponse = await login(username, password)

    if (loginResponse.ok) {
      storage.set(ACCESS_TOKEN, loginResponse.accessToken)

      userState.setIsAuthenticated(true)
      authState.setUsername('')
      authState.setPassword('')

      appState.transitionCover?.redirect(EPaths.home)
      return
    }

    handleAuthError(loginResponse.message, setLoginError)
  }

  useTitleSetter(EPageNames.login)

  return (
    <AuthWrapper
      authError={loginError}
      title="Login"
      handleSubmit={handleSubmit}
      redirectPath={EPaths.registration}
      redirectLinkText="Go to Registration"
      setAuthError={setLoginError}
    />
  )
}
