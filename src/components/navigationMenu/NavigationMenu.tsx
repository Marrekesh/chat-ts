import React, { FC } from 'react'
import Camera from '../svg/camera/Camera'
import { Link } from 'react-router-dom'
import Message from '../svg/message/Message'
import c from './navigationMenu.module.css'

const NavigationMenu: FC = () => {

     interface InavItem {
        component: React.ComponentType,
        link: string
    }

    const menuItems: Array<InavItem> = [
        {component: Message, link: '/profile'},
        {component: Message, link: '/main'}
    ]   


  return (
        <nav className={c.navigationMenu}>
            {menuItems.map(item => {
                return (
                    <Link key={item.link} to={item.link}>
                        <div className={c.navigationMenuItem}>
                            <item.component/>
                        </div> 
                    </Link>
                )
            })}

        </nav>
    )
}

export default NavigationMenu