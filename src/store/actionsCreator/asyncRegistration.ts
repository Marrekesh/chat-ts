import { AppDispatch } from "../store"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {setUser, setLoading} from "../reducers/UserSlice"
import { useNavigate } from "react-router-dom"
export const asyncRegistrAction = (email: string, password: string) => async (dispatch: AppDispatch) => {
    
    try {
        dispatch(setLoading(true))
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }))
            })
            .catch(error => console.log(error))
            
    } catch (e) {
        console.log('Не смог зарегать')
    } finally {
        dispatch(setLoading(false))
    }

}