import { AxiosError } from 'axios'
import http from '../../http'
import { EApiPaths } from '../../router/constants'
import { IGetMessagesError, TGetMessagesResponse } from '../../types/httpRequests/getMessages'

export const getMessages = async (): Promise<TGetMessagesResponse> => {
  try {
    const response = await http.get(EApiPaths.getMessages)

    return { ...response.data, ok: true }
  } catch (responseError) {
    const error = { ...responseError } as AxiosError<IGetMessagesError>

    if (!error.response) {
      return {
        ok: false,
        message: 'Network error',
      }
    }
    return { ok: false }
  }
}
