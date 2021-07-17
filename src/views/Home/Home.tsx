import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import appState from '../../store/appState'
import userState from '../../store/userState'
import { EWsRequestTypes } from '../../types/wsActions/wsRequest'

export const Home: FC = observer(() => {
  const click = () => {
    appState.wsClient?.send({
      type: EWsRequestTypes.homeClickMessage,
      lastClick: userState.username,
    })
  }

  useTitleSetter()

  return (
    <div>
      <div>Counter: {appState.counter}</div>
      <div>Last click: {appState.lastClick}</div>
      <button onClick={click}>click</button>
    </div>
  )
})
