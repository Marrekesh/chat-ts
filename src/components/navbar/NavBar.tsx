import c from './navbar.module.css'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import MyButton from '../ui/button/MyButton'
import buttonClasses from '../ui/button/myButton.module.css'
import { useLocation } from 'react-router-dom'
import Burger from '../burger/Burger'
import AuthIdn from '../authIdn/AuthIdn'

const NavBar = () => {
    const {isAuth} = useAuth()
    const navClasses = isAuth ? `${c.nav}` :`${c.nav} ${c.navEnd}`
    const {pathname} = useLocation()

    if (!isAuth && pathname === '/registration') {
        return (
            <div className={c.navbar}>
                <nav className={navClasses}>
                    <Link to="/login">
                        <MyButton className={buttonClasses.btn}>Login</MyButton>
                    </Link>
                </nav> 
            </div>
        )
    } else if(isAuth) {
        return (
            <div className={c.navbar}>
                <nav className={navClasses}>
                <Burger/>
                <AuthIdn/>
                </nav> 
            </div>
        )
    } else {
        return (
            <div className={c.navbar}>
                <nav className={navClasses}></nav> 
            </div>
        )
    }

    //     <Link to="/registration">
    //     <MyButton className={buttonClasses.btn}>Sign Up</MyButton>
    // </Link>

    //     <Link to="/registration">
    //     <MyButton className={buttonClasses.btn}>Sign Up</MyButton>
    // </Link>


    // <NavBar>
    // <Burger/>
    // <AuthIdn/>
    // </NavBar> 
    return (
        <div className={c.navbar}>
            <nav className={navClasses}>
                <Link to="/login">
                    <MyButton className={buttonClasses.btn}>Login</MyButton>
                </Link>
            </nav> 
        </div>
    )
}

export default NavBar