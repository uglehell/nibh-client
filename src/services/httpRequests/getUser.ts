import { AxiosError } from 'axios'
import { errorMessages } from '../../constants/error-messages'
import http from '../../http'
import { EApiPaths } from '../../router/constants'
import { IGetUserError, TGetUserResponse } from '../../types/httpRequests/getUser'

export const getUser = async (): Promise<TGetUserResponse> => {
  try {
    const response = await http.get(EApiPaths.getUser)

    return { ...response.data, ok: true }
  } catch (responseError) {
    const error = { ...responseError } as AxiosError<IGetUserError>

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
