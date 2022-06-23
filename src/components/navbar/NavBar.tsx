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

// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { MenuProps, Row } from 'antd';
// import { Breadcrumb, Layout, Menu } from 'antd';
// import React from 'react';

// const { Header, Content, Sider } = Layout;

const NavBar: FC = () => {
    const {isAuth} = useAuth()
    const navClasses = isAuth ? `${c.nav}` :`${c.nav} ${c.navEnd}`
    const {pathname} = useLocation()

    // interface IbuttonsMenu {
    //     link: string, 
    //     label: string,
    // }

    // const buttonsList1: IbuttonsMenu = [
    //     {link: '/login', label: 'Login'},
    //     {link: '/registration', label: 'Sign Up'}
    // ]

   

    // const itemB =   <Link to=''>
    //                 <MyButton className={buttonClasses.btn}>Кнопка</MyButton>
    //          </Link>

    // const arr = [itemB]

    // const items1 = arr.map((item) => item)                      
    
    // const items1:MenuProps['items']  = ['Logout'].map(key => ({
    //     key,
    //     label: key,
    // }));
    
    // const items2:MenuProps['items'] = ['Login', 'SignUp'].map(key => ({
    //     key,
    //     label: key,
    // }));

    // const btn = isAuth ? items2 : items1
    
    // return (
    //     <Layout>
    //         <Header className="header">
    //         {/* <div className="logo" /> */}
    //         <Row justify='end'>
    //             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={btn}/>
    //                 {/* <Menu.Item></Menu.Item> */}
    //         </Row>
            
    //         </Header>
    //   </Layout>
    // )

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
                <NavigationMenu/>
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