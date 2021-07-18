import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import appState from '../../store/appState'
import userState from '../../store/userState'
import { EWsRequestTypes } from '../../types/wsActions/wsRequest'
import styles from './HomeClickButton.module.scss'

export const HomeClickButton: FC = observer(() => {
  const handleClick = () => {
    appState.wsClient?.send({
      type: EWsRequestTypes.homeClickMessage,
      lastClick: userState.username,
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button onClick={handleClick} className={styles.button}>
          <span className={styles.clicks}>{appState.counter}</span>
        </button>
      </div>
    </div>
  )
})
