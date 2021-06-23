import { AxiosError } from 'axios'
import http from '../../http'
import { EApiPaths } from '../../router/constants'
import { IGetAppDataError, TGetAppDataResponse } from '../../types/httpRequests/getAppData'

export const getAppData = async (): Promise<TGetAppDataResponse> => {
  try {
    const response = await http.get(EApiPaths.getAppData)

    return { ...response.data, ok: true }
  } catch (responseError) {
    const error = { ...responseError } as AxiosError<IGetAppDataError>

    if (!error.response) {
      return {
        ok: false,
        message: 'Network error',
      }
    }
    return { ok: false }
  }
}
