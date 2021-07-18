import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import HomeClickButton from '../../components/HomeClickButton'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import appState from '../../store/appState'
import styles from './Home.module.scss'

export const Home: FC = observer(() => {
  useTitleSetter()

  return (
    <div className={styles.container}>
      <h3 className={styles.info}>We clicked</h3>
      <HomeClickButton />
      <h3 className={styles.info}>times</h3>
      <div className={styles.lastClick}>
        last click: <span className={styles.lastClickNickname}>{appState.lastClick}</span>
      </div>
    </div>
  )
})
