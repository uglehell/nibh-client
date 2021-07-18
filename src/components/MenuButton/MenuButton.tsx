import classNames from 'classnames'
import { FC } from 'react'
import styles from './MenuButton.module.scss'

export enum EMenuButtonPosition {
  left = 'left',
  center = 'center',
  right = 'right',
}

interface IMenuButtonProps {
  position: EMenuButtonPosition
  image: string
  imageAlt: string
  isActive: boolean
  handleClick: () => void
  isChatButton?: boolean
  isMessagesRead?: boolean
}

export const MenuButton: FC<IMenuButtonProps> = ({
  image,
  imageAlt,
  isActive,
  position,
  handleClick,
  isChatButton,
  isMessagesRead,
}) => (
  <button className={styles.button} onClick={handleClick}>
    <img
      className={classNames(
        styles.image,
        isActive && styles.image_active,
        position === EMenuButtonPosition.left && styles.image_position_left,
        position === EMenuButtonPosition.center && styles.image_position_center,
        position === EMenuButtonPosition.right && styles.image_position_right
      )}
      src={image}
      alt={imageAlt}
    />
  </button>
)
