import { makeAutoObservable } from 'mobx'
import { ReactElement } from 'react'

interface IPopup {
  element: ReactElement,
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
    this.popupsArray = this.popupsArray.filter(popup => popup.id !== id) // WIP
  }
}

export default new ErrorState()
