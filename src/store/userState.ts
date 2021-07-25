import { makeAutoObservable } from 'mobx'

class UserState {
  id = ''
  username = ''
  isAuthenticated = false

  constructor() {
    makeAutoObservable(this)
  }

  setUsername = (payload: string) => {
    this.username = payload
  }

  setIsAuthenticated = (payload: boolean) => {
    this.isAuthenticated = payload
  }

  setId = (payload: string) => {
    this.id = payload
  }
}

export default new UserState()
