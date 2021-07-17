import errorState from '../store/errorState'

export const addErrorPopup = (message: string) => {
  const errorId = Date.now()

  errorState.addErrorPopup({ text: message, id: errorId })
}
