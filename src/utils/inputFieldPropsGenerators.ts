import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const generateInputIsTouchedProp = (isTouched: boolean | undefined) => !!isTouched

export const generateInputErrorProp = (validationError: string | undefined, authError: string) =>
  validationError ?? authError

export const handleFieldChange =
  (
    handleChange: (event: string | ChangeEvent<any>) => void,
    setAuthError: Dispatch<SetStateAction<string>>,
    setError?: Dispatch<SetStateAction<string>>
  ) =>
  (event: string | ChangeEvent<any>) => {
    setAuthError('')
    setError?.('')
    handleChange(event)
  }
