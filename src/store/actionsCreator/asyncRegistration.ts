import { AppDispatch } from "../store"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {setStatus, setLoading, setError} from "../reducers/RegisterSlice"
import { AuthUserDataString } from "../../types/actionsTypes"
// import { useNavigate } from "react-router-dom"
export const asyncRegistrAction = (email: AuthUserDataString, password: AuthUserDataString) => async (dispatch: AppDispatch) => {
    
    try {
        // dispatch(setLoading(true))
        // const auth = getAuth()
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(({user}) => {
        //       alert('ZAREGANO')
        //     })
        //     .catch((error) => {
		// 		dispatch(setError(error.message))
        //         setTimeout(() => {
		// 			dispatch(setError(''))
		// 		}, 2000)
		// 	})

        dispatch(setLoading(true))
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)
        dispatch(setStatus(true))
        setTimeout(() => {
            dispatch(setStatus(false))
        }, 2000)
    } catch (error: any) {
        dispatch(setError(error.message))
        setTimeout(() => {
            dispatch(setError(''))
        }, 2000)
    } finally {
        dispatch(setLoading(false))
    }
}