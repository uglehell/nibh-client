import { AxiosError } from 'axios'
import http from '../../http'
import { EApiPaths } from '../../router/constants'
import {
  IChangeUsernameError,
  TChangeUsernameResponse,
} from '../../types/httpRequests/changeUsername'

export const changeUsername = async (newUsername: string): Promise<TChangeUsernameResponse> => {
  try {
    const response = await http.post(EApiPaths.changeUsername, { newUsername })

    return { ...response.data, ok: true }
  } catch (responseError) {
    const error = { ...responseError } as AxiosError<IChangeUsernameError>

    if (!error.response) {
      return {
        ok: false,
        message: 'Network error',
      }
    }

    return { ...error.response.data, ok: false }
  }
}
