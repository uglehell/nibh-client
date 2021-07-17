import { Dispatch, SetStateAction } from 'react'
import { errorMessages } from '../constants/error-messages'
import { addErrorPopup } from './addErrorPopup'

export const handleAuthError = (error: string, setAuthError: Dispatch<SetStateAction<string>>) => {
  if (error === errorMessages.networkError || error === errorMessages.unexpectedError) {
    addErrorPopup(error)
    return
  }

  setAuthError(error)
}
