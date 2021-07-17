import { FC, useState } from 'react'
import authState from '../../store/authState'
import { EPaths } from '../../router/constants'
import { registration } from '../../services/httpRequests/registration'
import AuthWrapper from '../../components/AuthWrapper'
import { handleAuthError } from '../../utils/handleAuthError'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import appState from '../../store/appState'
import { EPageNames } from '../../constants/app-constants'

interface IValues {
  username: string
  password: string
}

export const Registration: FC = () => {
  const [registrationError, setRegistrationError] = useState('')

  const handleSubmit = async ({ username, password }: IValues) => {
    const registrationResponse = await registration(username, password)

    if (registrationResponse.ok) {
      authState.setUsername(username)
      authState.setPassword(password)

      appState.transitionCover?.redirect(EPaths.login)
      return
    }

    handleAuthError(registrationResponse.message, setRegistrationError)
  }

  useTitleSetter(EPageNames.registration)

  return (
    <AuthWrapper
      authError={registrationError}
      title="Registration"
      handleSubmit={handleSubmit}
      redirectPath={EPaths.login}
      redirectLinkText="Go to Login"
      setAuthError={setRegistrationError}
    />
  )
}
