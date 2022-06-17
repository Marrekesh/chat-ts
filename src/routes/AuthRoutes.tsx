import {
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import LoginPage from "../pages/loginPage/LoginPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";


const AuthRoutes = () => {

    const authenticated = false


    

    if (authenticated) {
        return (

            <Routes>
                <Route path="/main" element={<MainPage />}/>
                <Route path="/*" element={<MainPage />}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/registration" element={<SignUpPage />}/>
            <Route path="/*" element={<LoginPage />}/>
        </Routes>
    )

}

export default AuthRoutes