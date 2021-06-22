import { EPaths } from '../router/constants'
import userState from '../store/userState'

export const useDefaultPathGenerator = () => {
  const isAuth = userState.isAuthenticated

  return isAuth ? EPaths.home : EPaths.login
}
