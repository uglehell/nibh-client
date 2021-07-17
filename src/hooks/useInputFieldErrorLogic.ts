import { Dispatch, SetStateAction, useEffect } from 'react'
import { timings } from '../constants/transitions-timings'

interface IUseInputFieldErrorLogicParams {
  error: string | null
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  isMessageActive: boolean
  setIsMessageActive: Dispatch<SetStateAction<boolean>>
  // helper: string
  // setHelper: Dispatch<SetStateAction<string>>
  // setIsHelperActive: Dispatch<SetStateAction<boolean>>
}

// WIP
export const useInputFieldErrorLogic = ({
  error,
  message,
  setMessage,
  isMessageActive,
  setIsMessageActive,
}: // helper,
// setHelper,
// setIsHelperActive,
IUseInputFieldErrorLogicParams) => {
  useEffect(() => {
    if (error !== message) {
      setIsMessageActive(!!error)
      error && setMessage(error)

      setTimeout(() => {
        !isMessageActive && setMessage('')
      }, timings.inputError)
    }
  }, [error, setIsMessageActive, setMessage, message, isMessageActive])
}
