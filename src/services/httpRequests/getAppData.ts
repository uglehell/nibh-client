import http from '../../http'
import { EApiPaths } from '../../router/constants'
import { TGetAppDataResponse } from '../../types/httpRequests/getAppData'

export const getAppData = async (): Promise<TGetAppDataResponse> => {
  try {
    const response = await http.get(EApiPaths.getAppData)

    return { ...response.data, ok: true }
  } catch (responseError) {
    return { ok: false }
  }
}
