import { makeAutoObservable } from 'mobx'

class UserState {
  username: string = ''
  isAuthenticated: boolean = true

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
