import { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
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

export const Login: FC = () => {
  const history = useHistory()
  const [loginError, setLoginError] = useState('')

  const handleSubmit = async ({ username, password }: IAuthFormValues) => {
    const loginResponse = await login(username, password)

    if (loginResponse.ok) {
      storage.set(ACCESS_TOKEN, loginResponse.accessToken)

      userState.setIsAuthenticated(true)
      authState.setUsername('')
      authState.setPassword('')

      history.push(EPaths.home)
      return
    }

    handleAuthError(loginResponse.message, setLoginError)
  }

  useTitleSetter('Login')

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
