import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import { LoginSchema } from '../../constants/login-schema'
import authState from '../../store/authState'
import styles from './AuthWrapper.module.scss'
import { Formik, Form } from 'formik'
import InputField from '../InputField'
import Button from '../Button'
import appState from '../../store/appState'
import { EButtonColors, EButtonTypes, EInputTypes } from '../../constants/ui-elements-params'
import { useAuthErrorChangeHandler } from '../../hooks/useAuthErrorChangeHandler'

enum ETextValues {
  password = 'password',
  nickname = 'nickname',
  username = 'username',
}

export interface IAuthFormValues {
  username: string
  password: string
}

interface IAuthWrapperProps {
  title: string
  handleSubmit: (values: IAuthFormValues) => void
  redirectPath: string
  redirectLinkText: string
  authError: string
  setAuthError: Dispatch<SetStateAction<string>>
}

const generateInputErrorProp = (validationError: string | undefined, authError: string) =>
  validationError ?? authError

const generateInputIsTouchedProp = (isTouched: boolean | undefined) => !!isTouched

export const AuthWrapper: FC<IAuthWrapperProps> = ({
  handleSubmit,
  title,
  redirectPath,
  redirectLinkText,
  authError,
  setAuthError,
}) => {
  const handleRedirect = () => {
    appState.transitionCover?.redirect(redirectPath)
  }

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useAuthErrorChangeHandler(setUsernameError, setPasswordError, authError)

  const handleFieldChange =
    (
      setError: Dispatch<SetStateAction<string>>,
      handleChange: (event: string | ChangeEvent<any>) => void
    ) =>
    (event: string | ChangeEvent<any>) => {
      setAuthError('')
      setError('')
      handleChange(event)
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <Formik
        initialValues={{ username: authState.username, password: authState.password }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.field_1}>
              <InputField
                handleChange={handleFieldChange(setUsernameError, handleChange)}
                name={ETextValues.username}
                title={ETextValues.nickname}
                isTouched={generateInputIsTouchedProp(touched.username)}
                error={generateInputErrorProp(errors.username, usernameError)}
              />
            </div>
            <div className={styles.field_2}>
              <InputField
                handleChange={handleFieldChange(setPasswordError, handleChange)}
                name={ETextValues.password}
                type={EInputTypes.password}
                title={ETextValues.password}
                isTouched={generateInputIsTouchedProp(touched.password)}
                error={generateInputErrorProp(errors.password, passwordError)}
              />
            </div>
            <div className={styles.submitButton}>
              <Button
                isStretched
                type={EButtonTypes.submit}
                value="Submit"
                color={EButtonColors.blue}
              />
            </div>
          </Form>
        )}
      </Formik>
      <div className={styles.redirectButton}>
        <Button value={redirectLinkText} isStretched handleClick={handleRedirect} />
      </div>
    </div>
  )
}
