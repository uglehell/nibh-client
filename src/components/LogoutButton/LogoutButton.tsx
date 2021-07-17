import { FC } from 'react'
import styles from './LogoutButton.module.scss'
import image from '../../assets/images/logout.svg'
import { logout } from '../../utils/logout'

export const LogoutButton: FC = () => {
  const handleClick = () => {
    logout()
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={styles.text}>Logout</span>
      <img className={styles.image} src={image} alt="logout" />
    </button>
  )
}
