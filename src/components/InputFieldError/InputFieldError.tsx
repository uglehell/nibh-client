import classNames from 'classnames'
import { useState, FC } from 'react'
import { useInputFieldErrorLogic } from '../../hooks/useInputFieldErrorLogic'
import styles from './InputFieldError.module.scss'

interface IInputFieldErrorProps {
  error: string | null
  isTouched: boolean
}

// WIP
export const InputFieldError: FC<IInputFieldErrorProps> = ({ error, isTouched }) => {
  const [message, setMessage] = useState('')
  const [isMessageActive, setIsMessageActive] = useState(true)
  // const [helper, setHelper] = useState('')
  // const [isHelperActive, setIsHelperActive] = useState(true)

  useInputFieldErrorLogic({
    error,
    message,
    setMessage,
    isMessageActive,
    setIsMessageActive,
    // helper,
    // setHelper,
    // setIsHelperActive,
  })

  return (
    <>
      <div
        className={classNames(
          styles.message,
          isMessageActive && isTouched && styles.message_active
        )}
      >
        {message}
      </div>
      {/* <div
        className={classNames(
          styles.helper,
          isHelperActive && isTouched && styles.helper_active
        )}
      >
        {helper}
      </div> */}
    </>
  )
}
