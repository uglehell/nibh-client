import { Field, Form, Formik } from 'formik'
import { FC, useRef, useState } from 'react'
import appState from '../../store/appState'
import userState from '../../store/userState'
import { EWsRequestTypes, TWsRequest } from '../../types/wsActions/wsRequest'
import styles from './MessageInputField.module.scss'
import sendMessageImage from '../../assets/images/send-message.svg'
import Button from '../Button'
import { EButtonColors, EButtonTypes } from '../../constants/ui-elements-params'
import classNames from 'classnames'

const MESSAGE = 'message'

interface IMessageFormValues {
  message: string
}

export const MessageInputField: FC = () => {
  const setMessageValueRef = useRef<() => void>()
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = ({ message }: IMessageFormValues) => {
    if (!message) {
      return
    }

    setMessageValueRef.current?.()

    const newMessageEvent: TWsRequest = {
      authorId: userState.id,
      type: EWsRequestTypes.newMessage,
      author: userState.username,
      text: message,
    }

    appState.wsClient?.send(newMessageEvent)
  }

  const handleFocus = () => {
    setIsFocused((isFocused) => !isFocused)
  }

  return (
    <div className={classNames(styles.container, styles.container_active)}>
      <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
        {({ setFieldValue }) => {
          setMessageValueRef.current = () => setFieldValue(MESSAGE, '')

          return (
            <Form className={styles.form}>
              <Field
                name={MESSAGE}
                id={MESSAGE}
                autoComplete="off"
                placeholder="Start typing"
                className={styles.field}
                onFocus={handleFocus}
                onBlur={handleFocus}
              />
              <div className={styles.sendButton}>
                <Button type={EButtonTypes.submit} color={EButtonColors.blue}>
                  <img src={sendMessageImage} alt="send message" />
                </Button>
                <div
                  className={classNames(
                    styles.sendButtonCover,
                    isFocused && styles.sendButtonCover_active
                  )}
                ></div>
              </div>
              <div
                className={classNames(styles.formCover, isFocused && styles.formCover_active)}
              ></div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
