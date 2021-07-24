import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'
import { TActiveDot } from '../components/PcVersionInfo/PcVersionInfo'
import { timings } from '../constants/transitions-timings'

interface IUsePcVersionInfoHelperArgs {
  activeDot: TActiveDot
  setActiveDot: Dispatch<SetStateAction<TActiveDot>>
  setDotActiveFlags: Dispatch<SetStateAction<boolean[]>>
  infoContainer: HTMLDivElement | null
}

export const usePcVersionInfoHelper = ({
  activeDot,
  setActiveDot,
  setDotActiveFlags,
  infoContainer,
}: IUsePcVersionInfoHelperArgs) => {
  const intervalRef = useRef<NodeJS.Timeout>()

  const handleUnMount = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)

    document.body.onmousemove = () => {}
  }, [])

  const setContainerCoords = useCallback(
    (mouseX: number, mouseY: number) => {
      const parallaxCoefficient = 0.05
      const x = (window.innerWidth / 2 - mouseX) * parallaxCoefficient
      const y = (window.innerHeight / 2 - mouseY) * parallaxCoefficient

      if (infoContainer) {
        infoContainer.style.transform = `translate(${x}px, ${y}px)`
      }
    },
    [infoContainer]
  )

  useEffect(() => {
    document.body.onmousemove = ({ pageX, pageY }) => {
      setContainerCoords(pageX, pageY)
    }

    intervalRef.current = setInterval(() => {
      setActiveDot((activeDot) => {
        switch (activeDot) {
          case 0:
            return 1
          case 1:
            return 2
          case 2:
            return 3
          default:
            return 0
        }
      })
    }, timings.pcInfoDotsIntervalDelay)

    return handleUnMount
  }, [handleUnMount, setActiveDot, infoContainer, setContainerCoords])

  useEffect(() => {
    setDotActiveFlags((dotActiveFlags) =>
      dotActiveFlags.map((isActive, index) => index < activeDot)
    )
  }, [activeDot, setDotActiveFlags])
}
