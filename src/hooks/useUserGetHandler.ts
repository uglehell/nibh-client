import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { EPaths } from '../router/constants'
import { getUser } from '../services/httpRequests/getUser'
import userState from '../store/userState'

export const useUserGetHandler = () => {
  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      const response = await getUser()

      if (response.ok) {
        userState.setId(response.id)
        userState.setUsername(response.username)
        userState.setIsAuthenticated(true)

        history.push(EPaths.home)
      }
    })()
  }, [history])
}
