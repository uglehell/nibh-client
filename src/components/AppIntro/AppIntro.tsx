import { FC } from 'react'
import styles from './AppIntro.module.scss'

export const AppIntro: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Nib<span className={styles.lastLetter}>h</span>
      </div>
    </div>
  )
}
