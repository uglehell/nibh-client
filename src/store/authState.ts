import { makeAutoObservable } from 'mobx'

class AuthState {
  username = ''
  password = ''

  constructor() {
    makeAutoObservable(this)
  }

  setUsername = (payload: string) => {
    this.username = payload
  }

  setPassword = (payload: string) => {
    this.password = payload
  }
}

export default new AuthState()
