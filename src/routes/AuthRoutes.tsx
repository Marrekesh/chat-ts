import {
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import LoginPage from "../pages/loginPage/LoginPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import { privateRoutes, publicRoutes, RouteNames } from "./routes";
import { useAuth } from "../hooks/useAuth";
import { useAppSelector } from "../hooks/redux";
const AuthRoutes = () => {
 
    const {isAuth} = useAuth()

    return (

        isAuth ?

            <Routes>
                {privateRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={<route.component/>}/>
                )}
            </Routes>

            :

            <Routes>
                {publicRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={<route.component/>}/>
                )}
            </Routes>

    )




    // if (isAuth) {
    //     return (

    //         <Routes>
    //             <Route path="/main" element={<MainPage />}/>
    //             <Route path="/*" element={<MainPage />}/>
    //         </Routes>
    //     )
    // }

    // return (
    //     <Routes>
    //         <Route path="/login" element={<LoginPage />}/>
    //         <Route path="/registration" element={<SignUpPage />}/>
    //         <Route path="/*" element={<LoginPage />}/>
    //     </Routes>
    // )

}

export default AuthRoutes