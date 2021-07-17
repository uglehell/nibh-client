import { FC } from 'react'
import classNames from 'classnames'
import styles from './ErrorPopup.module.scss'
import errorIcon from '../../assets/images/error-icon.svg'
import Button from '../Button'
import { useState } from 'react'
import errorState from '../../store/errorState'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { timings } from '../../constants/transitions-timings'

export interface IErrorPopupProps {
  text: string
  id: number
}

export const ErrorPopup: FC<IErrorPopupProps> = ({ text, id }) => {
  const [isActive, setIsActive] = useState(true)

  const disappearErrorPopup = useCallback(() => {
    setIsActive(false)

    setTimeout(() => {
      errorState.removeErrorPopup(id)
    }, timings.errorPopupAppearance)
  }, [id])

  useEffect(() => {
    setTimeout(disappearErrorPopup, timings.errorPopupLiveTime)
  }, [disappearErrorPopup])

  return (
    <div className={classNames(styles.container, !isActive && styles.container_disabled)}>
      <h1 className={styles.title}>
        <img src={errorIcon} alt="Error icon" className={styles.titleImage} />
        <span className={styles.titleText}>Error</span>
      </h1>
      <div className={styles.text}>{text}</div>
      <Button isStretched handleClick={disappearErrorPopup} value="OK" />
    </div>
  )
}
