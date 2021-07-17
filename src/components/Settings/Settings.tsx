import { Formik, Form } from 'formik'
import { useRef, useState } from 'react'
import { FC } from 'react'
import { EButtonColors, EButtonTypes } from '../../constants/ui-elements-params'
import { NicknameSchema } from '../../constants/validation-schemas'
import { changeUsername } from '../../services/httpRequests/changeUsername'
import userState from '../../store/userState'
import {
  generateInputErrorProp,
  generateInputIsTouchedProp,
  handleFieldChange,
} from '../../utils/inputFieldPropsGenerators'
import Button from '../Button'
import InputField from '../InputField'
import styles from './Settings.module.scss'
import submitImage from '../../assets/images/change-nickname.svg'
import classNames from 'classnames'
import appState from '../../store/appState'
import { observer } from 'mobx-react-lite'
import LogoutButton from '../LogoutButton'
import { timings } from '../../constants/transitions-timings'

interface INicknameFormValues {
  username: string
}

const USERNAME = 'username'

export const Settings: FC = observer(() => {
  const [requestError, setRequestError] = useState('')
  const [isImageAnimating, setIsImageAnimating] = useState(false)
  const setFieldValueRef =
    useRef<(field: string, value: any, shouldValidate?: boolean | undefined) => void>()
  const [placeholder, setPlaceholder] = useState('')

  const animateImage = () => {
    if (!isImageAnimating) {
      setIsImageAnimating(true)

      setTimeout(() => {
        setIsImageAnimating(false)
      }, timings.settingsSubmitAnimation)
    }
  }

  const handleSubmit = async ({ username }: INicknameFormValues) => {
    animateImage()

    const response = await changeUsername(username)

    if (response.ok) {
      userState.setUsername(username)
      setPlaceholder(response.message)
      setFieldValueRef.current && setFieldValueRef.current(USERNAME, '', false)
      return
    }

    setRequestError(response.message)
  }

  return (
    <div
      className={classNames(
        styles.container,
        !appState.isSettingsActive && styles.container_disabled
      )}
    >
      <Formik
        initialValues={{ username: '' }}
        validationSchema={NicknameSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, setFieldValue }) => {
          setFieldValueRef.current = setFieldValue

          return (
            <Form className={styles.form}>
              <div className={styles.field}>
                <InputField
                  name={USERNAME}
                  isTouched={generateInputIsTouchedProp(touched.username)}
                  error={generateInputErrorProp(errors.username, requestError)}
                  title="Nickname"
                  handleChange={handleFieldChange(handleChange, setRequestError)}
                  isLarge
                  placeholder={placeholder}
                />
              </div>
              <div className={styles.submit}>
                <Button isRounded color={EButtonColors.blue} type={EButtonTypes.submit}>
                  <img
                    src={submitImage}
                    alt="change nickname"
                    className={classNames(
                      styles.submitImage,
                      isImageAnimating && styles.submitImage_animating
                    )}
                  />
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
      <div className={styles.logout}>
        <LogoutButton />
      </div>
    </div>
  )
})
