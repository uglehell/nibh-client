import classNames from 'classnames'
import { useRef } from 'react'
import { useState, FC } from 'react'
import { usePcVersionInfoHelper } from '../../hooks/usePcVersionInfoHelper'
import styles from './PcVersionInfo.module.scss'

export type TActiveDot = 0 | 1 | 2 | 3

export const PcVersionInfo: FC = () => {
  const [activeDot, setActiveDot] = useState<TActiveDot>(0)
  const [dotActiveFlags, setDotActiveFlags] = useState<boolean[]>([false, false, false])
  const infoRef = useRef<HTMLDivElement>(null)

  usePcVersionInfoHelper({
    activeDot,
    setActiveDot,
    setDotActiveFlags,
    infoContainer: infoRef.current,
  })

  return (
    <div className={styles.container}>
      <div className={styles.info} ref={infoRef}>
        PC version coming soon
        {dotActiveFlags.map((isActive, index) => (
          <span key={index} className={classNames(styles.dot, isActive && styles.dot_active)}>
            .
          </span>
        ))}
      </div>
      <div className={styles.cover}></div>
    </div>
  )
}
