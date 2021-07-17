import { FC, useRef } from 'react'
import { Field, Form, Formik } from 'formik'
import { EWsRequestTypes, TWsRequest } from '../../types/wsActions/wsRequest'
import userState from '../../store/userState'
import appState from '../../store/appState'
import { observer } from 'mobx-react-lite'
import { useTitleSetter } from '../../hooks/useTitleSetter'

interface IValues {
  message: string
}

export const Chat: FC = observer(() => {
  const setInputValueRef =
    useRef<(field: string, value: any, shouldValidate?: boolean | undefined) => void>()

  const handleSubmit = ({ message }: IValues) => {
    if (!message) {
      return
    }

    const newMessageEvent: TWsRequest = {
      type: EWsRequestTypes.newMessage,
      author: userState.username,
      text: message,
    }

    appState.wsClient?.send(newMessageEvent)

    setInputValueRef.current?.('message', '')
  }

  useTitleSetter('Chat')

  return (
    <div>
      {appState.messages.map(({ author, text, createdAt, id }) => (
        <div key={id}>
          {author}: {text} ({createdAt})
        </div>
      ))}
      <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
        {({ setFieldValue }) => {
          setInputValueRef.current = setFieldValue

          return (
            <Form>
              <Field name="message" id="message" autoComplete="off" />
              <button type="submit" onSubmit={() => setFieldValue('message', '')}>
                send
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
})
