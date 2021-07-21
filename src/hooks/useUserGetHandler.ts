import { useEffect } from 'react'
import { errorMessages } from '../constants/error-messages'
import { EPaths } from '../router/constants'
import { getUser } from '../services/httpRequests/getUser'
import appState from '../store/appState'
import errorState from '../store/errorState'
import userState from '../store/userState'

export const useUserGetHandler = () => {
  useEffect(() => {
    ;(async () => {
      appState.setIsLoading(true)
      const response = await getUser()
      appState.setIsLoading(false)

      if (response.ok) {
        userState.setId(response.id)
        userState.setUsername(response.username)
        userState.setIsAuthenticated(true)

        appState.transitionCover?.redirect(EPaths.home)
        return
      }

      const errorId = Date.now()

      errorState.addErrorPopup({ id: errorId, text: errorMessages.unexpectedError })
    })()
  }, [])
}
