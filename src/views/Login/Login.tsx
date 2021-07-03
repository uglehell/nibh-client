import { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { EPaths } from '../../router/constants'
import { Formik, Form, Field } from 'formik'
import { login } from '../../services/httpRequests/login'
import { storage } from '../../utils/storage'
import { ACCESS_TOKEN } from '../../constants/storage'
import userState from '../../store/userState'
import authState from '../../store/authState'
import { LoginSchema } from '../../constants/login-schema'

interface IValues {
  username: string
  password: string
}

export const Login: FC = () => {
  const history = useHistory()

  const handleSubmit = async ({ username, password }: IValues) => {
    const loginResponse = await login(username, password)

    if (loginResponse.ok) {
      storage.set(ACCESS_TOKEN, loginResponse.accessToken)

      userState.setIsAuthenticated(true)
      authState.setUsername('')
      authState.setPassword('')

      history.push(EPaths.home)
    }
  }

  return (
    <div>
      <div>Login</div>
      <Formik
        initialValues={{ username: authState.username, password: authState.password }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.username && touched.username && <span>{errors.username}</span>}
            <Field name="username" />
            {errors.password && touched.password && <span>{errors.password}</span>}
            <Field name="password" type="password"></Field>
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
      <Link to={EPaths.registration}>Go to registration</Link>
    </div>
  )
}
