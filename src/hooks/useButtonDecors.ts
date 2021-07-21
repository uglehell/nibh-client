import { useCallback, useState } from 'react'
import { timings } from '../constants/transitions-timings'

export const useButtonDecors = () => {
  const [buttonDecorsIdList, setButtonDecorsIdList] = useState<number[]>([])

  const addButtonDecor = useCallback(() => {
    const newDecorItemId = Date.now()

    setButtonDecorsIdList((prevState) => [...prevState, newDecorItemId])

    setTimeout(() => {
      setButtonDecorsIdList((prevState) => prevState.filter((id) => id !== newDecorItemId))
    }, timings.buttonDecorAnimation)
  }, [])

  return { addButtonDecor, buttonDecorsIdList }
}
