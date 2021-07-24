import { FC } from 'react'
import Button from '../Button'
import styles from './ChatScrollButton.module.scss'
import buttonImage from '../../assets/images/chat-scroll.svg'
import classNames from 'classnames'

interface IChatScrollButtonProps {
  isActive: boolean
  scrollToBottom: () => void
}

export const ChatScrollButton: FC<IChatScrollButtonProps> = ({ isActive, scrollToBottom }) => (
  <div className={classNames(styles.container, isActive && styles.container_active)}>
    <Button isRounded handleClick={scrollToBottom}>
      <img src={buttonImage} alt="scroll down" className={styles.image} />
    </Button>
  </div>
)
