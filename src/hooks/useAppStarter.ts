import { useEffect, useState } from 'react'
import { timings } from '../constants/transitions-timings'

export const useAppStarter = () => {
  const [isStarting, setIsStarting] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsStarting(false)
    }, timings.introAnimation)
  }, [])

  return isStarting
}
