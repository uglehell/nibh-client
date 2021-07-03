interface IChangeUsernameSuccess {
  ok: true
  message: 'Username changed successfully'
}

export interface IChangeUsernameError {
  ok: false
  message: string
}

export type TChangeUsernameResponse = IChangeUsernameSuccess | IChangeUsernameError

export interface IChangeUsernameRequest {
  newUsername: string
}
