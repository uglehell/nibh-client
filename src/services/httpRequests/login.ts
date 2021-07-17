import { AxiosError } from 'axios'
import { errorMessages } from '../../constants/error-messages'
import http from '../../http'
import { EApiPaths } from '../../router/constants'
import { ILoginError, TLoginResponse } from '../../types/httpRequests/login'

export const login = async (username: string, password: string): Promise<TLoginResponse> => {
  try {
    const response = await http.post(EApiPaths.login, {
      username,
      password,
    })

    return { ...response.data, ok: true }
  } catch (responseError) {
    const error = { ...responseError } as AxiosError<ILoginError>

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
