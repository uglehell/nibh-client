const formate = (payload: number): string => {
  const string = `${payload}`

  return (string.length === 1 ? '0' : '') + string
}

export const timeFormatter = (createdAt: string) => {
  const date = new Date(createdAt)
  const hours = formate(date.getHours())
  const minutes = formate(date.getMinutes())

  return `${hours}:${minutes}`
}
