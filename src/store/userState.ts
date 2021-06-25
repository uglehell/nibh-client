import { makeAutoObservable } from 'mobx'

class UserState {
  id = '60d02dbb3080963948816d34'
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

  setId = (payload: string) => {
    this.id = payload
  }
}

export default new UserState()
