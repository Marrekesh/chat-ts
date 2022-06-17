import Burger from '../burger/Burger'
import AuthIdn from '../authIdn/AuthIdn'
import c from './navbar.module.css'
import MyButton from '../ui/button/MyButton'
import but from '../ui/button/myButton.module.css'

const NavBar = () => {

    const authenticated = false

    const content = authenticated 
    ? 
        <nav className={c.nav}>
            <Burger/>
            <AuthIdn/>
        </nav>
    :
        <nav className={`${c.nav} ${c.navEnd}`}>
            <MyButton className={but.btn}>Sign Up</MyButton>
        </nav>    

    return (

        <div className={c.navbar}>
            {content}
        </div>

    )
}

export default NavBar