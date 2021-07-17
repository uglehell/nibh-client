import classNames from 'classnames'
import { useState } from 'react'
import { FC } from 'react'
import { useTransitionCover } from '../../hooks/useTransitionCover'
import appState from '../../store/appState'

import styles from './TransitionCover.module.scss'

export const TransitionCover: FC = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const transitionCoverInterface = useTransitionCover(isAnimating, setIsAnimating)
  appState.setTransitionCover(transitionCoverInterface)

  return <div className={classNames(styles.container, isAnimating && styles.container_animating)} />
}
