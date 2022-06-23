import {
    Routes,
    Route,
} from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "./routes";
import { useAuth } from "../hooks/useAuth";



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




//     if (isAuth) {
//         return (

//             <Routes>
//                 <Route path="/main" element={<MainPage />}/>
//                 <Route path="/main/*" element={<MainPage/>}/>
//             </Routes>
//         )
//     }

//     return (
//         <Routes>
//             <Route path="/login" element={<LoginPage />}/>
//             <Route path="/registration" element={<SignUpPage />}/>
//             <Route path="/*" element={<LoginPage />}/>
//         </Routes>
//     )

 }

export default AuthRoutes