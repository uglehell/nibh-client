import { useState } from 'react'
import { FC } from 'react'
import MenuButton from '../MenuButton'
import { EMenuButtonPosition } from '../MenuButton/MenuButton'
import styles from './Menu.module.scss'
import homeImage from '../../assets/images/menu-home.svg'
import chatImage from '../../assets/images/menu-messages.svg'
import onlineUsersImage from '../../assets/images/menu-online-users.svg'
import { EPaths } from '../../router/constants'
import appState from '../../store/appState'
import { useLocation } from 'react-router-dom'

enum EPages {
  home = 'home',
  chat = 'chat',
  onlineUsers = 'onlineUsers',
}

export const Menu: FC = () => {
  const [currentPage, setCurrentPage] = useState<EPages>(EPages.home)
  const { pathname } = useLocation()

  const generateClickHandler = (path: EPaths) => () => {
    if (pathname === path) {
      return
    }

    if (path === EPaths.home) {
      setCurrentPage(EPages.home)
    }
    if (path === EPaths.chat) {
      setCurrentPage(EPages.chat)
    }
    if (path === EPaths.onlineUsers) {
      setCurrentPage(EPages.onlineUsers)
    }

    appState.transitionCover?.redirect(path)
  }

  return (
    <div className={styles.container}>
      <MenuButton
        position={EMenuButtonPosition.left}
        isActive={currentPage === EPages.home}
        image={homeImage}
        imageAlt="home"
        handleClick={generateClickHandler(EPaths.home)}
      />
      <MenuButton
        position={EMenuButtonPosition.center}
        isActive={currentPage === EPages.chat}
        image={chatImage}
        imageAlt="chat"
        handleClick={generateClickHandler(EPaths.chat)}
        isChatButton
      />
      <MenuButton
        position={EMenuButtonPosition.right}
        isActive={currentPage === EPages.onlineUsers}
        image={onlineUsersImage}
        imageAlt="online users"
        handleClick={generateClickHandler(EPaths.onlineUsers)}
      />
    </div>
  )
}
