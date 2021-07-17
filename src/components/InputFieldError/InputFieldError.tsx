import classNames from 'classnames'
import { useState, FC } from 'react'
import { useInputFieldErrorLogic } from '../../hooks/useInputFieldErrorLogic'
import styles from './InputFieldError.module.scss'

interface IInputFieldInfoProps {
  error: string | null
  isTouched: boolean
}

export const InputFieldInfo: FC<IInputFieldInfoProps> = ({ error, isTouched }) => {
  const [message, setMessage] = useState('')
  const [isMessageActive, setIsMessageActive] = useState(true)

  useInputFieldErrorLogic({
    error,
    message,
    setMessage,
    isMessageActive,
    setIsMessageActive,
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
    </>
  )
}
