import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useTitleSetter } from '../../hooks/useTitleSetter'
import { EPageNames } from '../../constants/app-constants'
import styles from './Chat.module.scss'
import MessagesContainer from '../../components/MessagesContainer'
import MessageInputField from '../../components/MessageInputField'

export const Chat: FC = observer(() => {
  // WIP
  // const [isMessageFieldActive, setIsMessageFieldActive] = useState(true)
  // const containerRef = useRef<HTMLDivElement>(null)
  // const isScrolledToBottom =
  //   !!containerRef.current &&
  //   containerRef.current?.scrollTop + window.innerHeight - 45 === containerRef.current?.scrollHeight

  useTitleSetter(EPageNames.chat)

  return (
    <div className={styles.container}>
      <MessagesContainer />
      <MessageInputField />
    </div>
  )
})
