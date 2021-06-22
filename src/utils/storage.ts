export const storage = {
  set: (key: string, data: string) => {
    localStorage.setItem(key, data)
  },
  get: (key: string) => {
    return localStorage.getItem(key)
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  },
}
