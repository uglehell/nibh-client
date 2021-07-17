export const IS_PC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)

export enum EPageNames {
  login = 'Login',
  registration = 'Registration',
  chat = 'Chat',
  onlineUsers = 'Online users',
}
