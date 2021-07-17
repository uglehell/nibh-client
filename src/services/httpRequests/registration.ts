import { AxiosError } from 'axios'
import { errorMessages } from '../../constants/error-messages'
import http from '../../http'
import { EApiPaths } from '../../router/constants'
import { IRegistrationError, TRegistrationResponse } from '../../types/httpRequests/registration'

export const registration = async (
  username: string,
  password: string
): Promise<TRegistrationResponse> => {
  try {
    const response = await http.post(EApiPaths.registration, {
      username,
      password,
    })

    return { ...response.data, ok: true }
  } catch (responseError) {
    const error = { ...responseError } as AxiosError<IRegistrationError>

    if (!error.response) {
      return {
        ok: false,
        message: errorMessages.networkError,
        errors: [],
      }
    }

    return { ...error.response.data, ok: false }
  }
}
