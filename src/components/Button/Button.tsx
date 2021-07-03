import { FC } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

interface IButtonProps {
  color?: 'blue' | 'red' | 'default'
  type?: 'submit' | 'reset' | 'button'
  value?: string
  image?: string
  imageAlt?: string
  onClick: () => void
}

export const Button: FC<IButtonProps> = ({
  color = 'default',
  value,
  type = 'button',
  image,
  imageAlt,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        styles.button,
        color === 'blue' && styles.button_color_blue,
        color === 'red' && styles.button_color_red
      )}
    >
      {image && <img alt={imageAlt} className={styles.image} src={image} />}
      {value && <span className={styles.value}>{value}</span>}
    </button>
  )
}
