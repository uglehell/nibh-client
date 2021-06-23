interface IGetUserSuccess {
  ok: true
  id: string
  username: string
}

export interface IGetUserError {
  ok: false
  message: string
  errors: []
}

export type TGetUserResponse = IGetUserSuccess | IGetUserError
