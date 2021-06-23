interface ILoginSuccess {
  ok: true
  accessToken: string
}

export interface ILoginError {
  ok: false
  message: string
  errors: IValidationError[]
}

export type TLoginResponse = ILoginSuccess | ILoginError

export interface ILoginRequest {
  username: string
  password: string
}

interface IValidationError {
  value: string
  msg: string
  param: string
  location: string
}
