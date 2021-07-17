import classNames from 'classnames'
import { FC } from 'react'
import passwordHide from '../../assets/images/password-hide.svg'
import styles from './PasswordHideButton.module.scss'

interface IPasswordHideButton {
  handleClick: () => void
  isPasswordHidden: boolean
}

export const PasswordHideButton: FC<IPasswordHideButton> = ({ handleClick, isPasswordHidden }) => (
  <button
    type="button"
    className={classNames(styles.passwordHide, isPasswordHidden && styles.passwordHide_disabled)}
    onClick={handleClick}
  >
    <img className={styles.passwordHideImg} src={passwordHide} alt="show/hide password" />
  </button>
)
