import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

// export const AuthContext = createContext()


// const AuthProvider = ({children}: React.ReactNode) => {

//     const [user, setUser] = useState<any>(null)
//     const [loading, setLoading] = useState<boolean>(true)

//     useEffect(() => {

//         onAuthStateChanged(auth, (user) => {
//             setUser(user)
//             setLoading(false)
//         })
//     }, [])

//     if (loading) {
//         return 'Loading'
//     }

//     return (
//         <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
//     )
// }
// export default AuthProvider