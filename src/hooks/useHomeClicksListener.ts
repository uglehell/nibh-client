import { useEffect } from 'react'
import appState from '../store/appState'

interface IUseHomeClicksListenerArgs {
  addButtonDecor: () => void
}

export const useHomeClicksListener = ({ addButtonDecor }: IUseHomeClicksListenerArgs) => {
  useEffect(() => {
    addButtonDecor()
    // WIP
    // eslint-disable-next-line
  }, [appState.counter, addButtonDecor])
}
