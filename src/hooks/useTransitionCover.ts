import { History } from 'history'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { useHistory } from 'react-router-dom'
import { timings } from '../constants/transitions-timings'

export class TransitionCover {
  constructor(
    private history: History,
    private isAnimating: boolean,
    private setIsAnimating: Dispatch<SetStateAction<boolean>>
  ) {}

  redirect = (path: string) => {
    if (!this.isAnimating) {
      this.setIsAnimating(true)

      setTimeout(() => {
        this.history.push(path)
      }, timings.pageTransition / 2)

      setTimeout(() => {
        this.setIsAnimating(false)
      }, timings.pageTransition)
    }
  }
}

export const useTransitionCover = (
  isAnimating: boolean,
  setIsAnimating: Dispatch<SetStateAction<boolean>>
) => {
  const history = useHistory()

  return new TransitionCover(history, isAnimating, setIsAnimating)
}
