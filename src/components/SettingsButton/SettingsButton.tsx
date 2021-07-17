import { FC } from 'react'
import Button from '../Button'
import styles from './SettingsButton.module.scss'
import icon from '../../assets/images/settings-icon.svg'
import classNames from 'classnames'
import appState from '../../store/appState'
import { observer } from 'mobx-react-lite'

export const SettingsButton: FC = observer(() => {
  const [isActive, setIsActive] = [appState.isSettingsActive, appState.setIsSettingsActive]

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.container}>
      <Button isRounded handleClick={handleClick}>
        <img
          className={classNames(styles.icon, isActive && styles.icon_active)}
          src={icon}
          alt="open settings"
        />
      </Button>
    </div>
  )
})
