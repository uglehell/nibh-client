import { makeAutoObservable } from 'mobx'

interface IPopup {
  text: string
  id: number
}

class ErrorState {
  isActive = false
  text = ''
  popupsArray: IPopup[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setIsActive = (payload: boolean) => {
    this.isActive = payload
  }

  setText = (payload: string) => {
    this.text = payload
  }

  addErrorPopup = (popup: IPopup) => {
    this.popupsArray.push(popup)
  }

  removeErrorPopup = (id: number) => {
    this.popupsArray = this.popupsArray.filter(({ id: popupId }) => popupId !== id)
  }
}

export default new ErrorState()
