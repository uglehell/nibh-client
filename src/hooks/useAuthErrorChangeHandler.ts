import { Dispatch, SetStateAction, useEffect } from 'react'
import { errorMessages } from '../constants/error-messages'

export const useAuthErrorChangeHandler = (
  setUsernameError: Dispatch<SetStateAction<string>>,
  setPasswordError: Dispatch<SetStateAction<string>>,
  authError: string
) => {
  useEffect(() => {
    if (
      authError === errorMessages.usernameNotFounded ||
      authError === errorMessages.usernameIsAlreadyTaken
    ) {
      setUsernameError(authError)
      return
    }

    setPasswordError(authError)
  }, [authError, setUsernameError, setPasswordError])
}
