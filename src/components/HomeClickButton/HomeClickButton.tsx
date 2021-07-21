import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { useButtonDecors } from '../../hooks/useButtonDecors'
import { useHomeClicksListener } from '../../hooks/useHomeClicksListener'
import appState from '../../store/appState'
import userState from '../../store/userState'
import { EWsRequestTypes } from '../../types/wsActions/wsRequest'
import styles from './HomeClickButton.module.scss'

export const HomeClickButton: FC = observer(() => {
  const { addButtonDecor, buttonDecorsIdList } = useButtonDecors()

  useHomeClicksListener({ addButtonDecor })

  const handleClick = () => {
    appState.wsClient?.send({
      type: EWsRequestTypes.homeClickMessage,
      lastClick: userState.username,
    })
  }

  return (
    <div className={styles.container}>
      {buttonDecorsIdList.map((id) => (
        <div className={styles.decor} key={id}></div>
      ))}
      <div className={styles.wrapper}>
        <button onClick={handleClick} className={styles.button}>
          <span className={styles.clicks}>{appState.counter}</span>
        </button>
      </div>
    </div>
  )
})
