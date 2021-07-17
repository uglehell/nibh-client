import { FC } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
import { EButtonColors, EButtonTypes } from '../../constants/ui-elements-params'

interface IButtonProps {
  color?: EButtonColors
  type?: EButtonTypes
  value?: string
  image?: string
  imageAlt?: string
  handleClick?: () => void
  isStretched?: boolean
}

export const Button: FC<IButtonProps> = ({
  color = EButtonColors.default,
  value,
  type = EButtonTypes.button,
  image,
  imageAlt,
  handleClick: handleClickProp = () => {},
  isStretched = false,
}) => {
  const [buttonDecorsIdList, setButtonDecorsIdList] = useState<number[]>([])

  const addButtonDecor = () => {
    const newDecorItemId = Date.now()

    setButtonDecorsIdList((prevState) => [...prevState, newDecorItemId])

    setTimeout(() => {
      setButtonDecorsIdList((prevState) => prevState.filter((id) => id !== newDecorItemId))
    }, 500)
  }

  const handleClick = () => {
    addButtonDecor()
    handleClickProp()
  }

  return (
    <div className={styles.buttonContainer}>
      {buttonDecorsIdList.map((id) => (
        <div key={id} className={styles.buttonDecor} />
      ))}
      <button
        onClick={handleClick}
        type={type}
        className={classNames(
          styles.button,
          isStretched && styles.button_stretched,
          color === EButtonColors.blue && styles.button_color_blue,
          color === EButtonColors.red && styles.button_color_red
        )}
      >
        {image && <img alt={imageAlt} className={styles.image} src={image} />}
        {value && <span className={styles.value}>{value}</span>}
      </button>
    </div>
  )
}
