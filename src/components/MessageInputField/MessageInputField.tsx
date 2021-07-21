import { Field, Form, Formik } from 'formik'
import { FC } from 'react'
import appState from '../../store/appState'
import userState from '../../store/userState'
import { EWsRequestTypes, TWsRequest } from '../../types/wsActions/wsRequest'
import styles from './MessageInputField.module.scss'
import sendMessageImage from '../../assets/images/send-message.svg'
import Button from '../Button'

interface IMessageFormValues {
  message: string
}

export const MessageInputField: FC = () => {
  const handleSubmit = ({ message }: IMessageFormValues) => {
    if (!message) {
      return
    }

    const newMessageEvent: TWsRequest = {
      type: EWsRequestTypes.newMessage,
      author: userState.username,
      text: message,
    }

    appState.wsClient?.send(newMessageEvent)
  }

  return (
    <div className={styles.container}>
      <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <Field name="message" id="message" autoComplete="off" />
            <button type="submit" onSubmit={() => setFieldValue('message', '')}>
              send
            </button>
            <div className={styles.sendButton}>
              <Button>
                <img src={sendMessageImage} alt="send message" />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
