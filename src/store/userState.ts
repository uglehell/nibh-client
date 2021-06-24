import { makeAutoObservable } from 'mobx'

class UserState {
  username = 'qq' // WIP
  isAuthenticated = true // WIP

  constructor() {
    makeAutoObservable(this)
  }

  setUsername = (payload: string) => {
    this.username = payload
  }

  setIsAuthenticated = (payload: boolean) => {
    this.isAuthenticated = payload
  }
}

export default new UserState()
