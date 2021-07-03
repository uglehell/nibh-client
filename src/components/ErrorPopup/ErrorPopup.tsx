import { FC } from 'react'
import classNames from 'classnames'
import styles from './ErrorPopup.module.scss'
import errorIcon from '../../assets/images/error-icon.svg'
import Button from '../Button'

export interface IErrorPopupProps {
  text: string
  isActive: boolean
}

export const ErrorPopup: FC<IErrorPopupProps> = ({ text, isActive }) => {
  return (
    <div className={classNames(styles.container, !isActive && styles.container_disabled)}>
      <h1 className={styles.title}>
        <img src={errorIcon} alt='Error icon' className={styles.titleImage} />
        <span className={styles.titleText}>Error</span>
      </h1>
      <div className={styles.text}>{text}</div>
      <Button onClick={() => {}}/>
    </div>
  )
}
