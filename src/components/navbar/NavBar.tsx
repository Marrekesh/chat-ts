import Burger from '../burger/Burger'
import AuthIdn from '../authIdn/AuthIdn'
import c from './navbar.module.css'
import MyButton from '../ui/button/MyButton'
import but from '../ui/button/myButton.module.css'
import { useAuth } from '../../hooks/useAuth'
import { removeUser } from '../../store/reducers/UserSlice'
import { useAppDispatch } from '../../hooks/redux'
import { Link, useParams } from 'react-router-dom'

interface INavBar {
    props?: string[]
    children: React.ReactNode
    className?: string,
    // onClick?: (e: any) => void
}


const NavBar = ({children, ...props}: INavBar) => {
    const {isAuth} = useAuth()
    const dispatch = useAppDispatch()

    const navClasses = isAuth ? `${c.nav}` :`${c.nav} ${c.navEnd}` 


    return (

        <div className={c.navbar}>
            <nav className={navClasses}>
                {children}
            </nav> 
            
        </div>

    )
}

export default NavBar