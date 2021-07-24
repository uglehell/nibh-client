import { useEffect } from 'react'
import appState from '../store/appState'

interface IUseMessagesContainerHandlerArgs {
  scrollToBottom: (isAuto?: boolean) => void
}

export const useMessagesContainerHandler = ({
  scrollToBottom,
}: IUseMessagesContainerHandlerArgs) => {
  useEffect(() => {
    scrollToBottom(true)
  }, [scrollToBottom])

  useEffect(() => {
    scrollToBottom()
    // WIP
    // eslint-disable-next-line
  }, [appState.messages])
}
