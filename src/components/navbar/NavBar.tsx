import c from './navbar.module.css'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import MyButton from '../ui/button/MyButton'
import buttonClasses from '../ui/button/myButton.module.css'
import { useLocation } from 'react-router-dom'
import Burger from '../burger/Burger'
import AuthIdn from '../authIdn/AuthIdn'
import { FC } from 'react'
import NavigationMenu from '../navigationMenu/NavigationMenu'
import { useAppDispatch } from '../../hooks/redux'
import { removeUser, removeLoginUser } from '../../store/reducers/UserSlice'
import { signOut } from "firebase/auth"
import { auth, db } from '../../firebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { MenuProps, Row } from 'antd';
// import { Breadcrumb, Layout, Menu } from 'antd';
// import React from 'react';

// const { Header, Content, Sider } = Layout;

const NavBar: FC = () => {
    const {isAuth} = useAuth()
    const navClasses = isAuth ? `${c.nav}` :`${c.nav} ${c.navEnd}`
    const {pathname} = useLocation()

    interface IbuttonsMenu {
        link: string, 
        label: string,
    }

    type ButtonsList = Array<IbuttonsMenu> 

    const buttonsList: ButtonsList = [
        {link: '/profile', label: 'Profile'},
        {link: '/main', label: 'Message'},
    ]

    const dispatch = useAppDispatch()

    const logoutHandler = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser!.uid), {
            isOnline: false
        })
        await signOut(auth)
        dispatch(removeUser())
        dispatch(removeLoginUser())
        // navigate('/login')
        // dispatch(setStatus(false))
        // localStorage.removeItem('userData')

        // dispatch(setMainUserLoading(false))
    }


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
    } else if (isAuth && pathname === '/profile') {
        return (
            <div className={c.navbar}>
                <nav className={navClasses}>
                    <div className={c.btnGroup}>
                        {buttonsList.map(item => {
                            return (
                                <Link key={item.link} to={item.link}>
                                    <MyButton className={`${buttonClasses.btn} ${buttonClasses.navBtn}`}>{item.label}</MyButton>
                                </Link>
                            )
                        })}
                        <Link onClick={logoutHandler} to='/login'>
                            <MyButton className={`${buttonClasses.btn} ${buttonClasses.navBtn}`}>Logout</MyButton>
                        </Link>  
                    </div>
                   <AuthIdn/>
                </nav> 
                
                {/* <NavigationMenu/> */}
            </div>
        )
    } else if(isAuth) {
        return (
                <div className={` ${c.navbar} ${c.navBtw}`}>
                <div className={c.logoSearchBLock}>
                    <div className={c.logo}>Chat</div>
                    <div className={c.search}>Search</div>
                </div>
                <nav className={navClasses}>
                    <div className={c.btnGroup}>
                        {buttonsList.map(item => {
                            return (
                                <Link key={item.link} to={item.link}>
                                    <MyButton className={`${buttonClasses.btn} ${buttonClasses.navBtn}`}>{item.label}</MyButton>
                                </Link>
                            )
                        })}
                        <Link onClick={logoutHandler} to='/login'>
                            <MyButton className={`${buttonClasses.btn} ${buttonClasses.navBtn}`}>Logout</MyButton>
                        </Link>  
                    </div>
                <AuthIdn/>
                </nav> 
                
                {/* <NavigationMenu/> */}
            </div>
        )
    } else {
        return (
            <div className={c.navbar}>
                <nav className={navClasses}>
                    <Link to="/registration">
                        <MyButton className={buttonClasses.btn}>Sign Up</MyButton>
                    </Link>
                </nav> 
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
    // return (
    //     <div className={c.navbar}>
    //         <nav className={navClasses}>
    //             <Link to="/login">
    //                 <MyButton className={buttonClasses.btn}>Login</MyButton>
    //             </Link>
    //         </nav> 
    //     </div>
    // )
}

export default NavBar