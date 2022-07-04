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
 }

export default AuthRoutes