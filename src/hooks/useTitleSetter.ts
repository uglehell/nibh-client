import { useEffect } from 'react'

export const useTitleSetter = (title: string = '') => {
  useEffect(() => {
    document.title = `Nibh${title && ` - ${title}`}`
  }, [title])
}
