import { FC } from 'react'
import { LoginSchema } from '../../constants/login-schema'
import authState from '../../store/authState'
import { Formik, Field, Form } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { EPaths } from '../../router/constants'
import { registration } from '../../services/httpRequests/registration'

interface IValues {
  username: string
  password: string
}

export const Registration: FC = () => {
  const history = useHistory()

  const handleSubmit = async ({ username, password }: IValues) => {
    const registrationResponse = await registration(username, password)

    if (registrationResponse.ok) {
      authState.setUsername(username)
      authState.setPassword(password)

      history.push(EPaths.login)
    }
  }
  return (
    <div>
      Registration
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.username && touched.username && <span>{errors.username}</span>}
            <Field name="username" />
            {errors.password && touched.password && <span>{errors.password}</span>}
            <Field name="password"></Field>
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
      <Link to={EPaths.registration}>Go to login</Link>
    </div>
  )
}
