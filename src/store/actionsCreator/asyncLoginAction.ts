import { AppDispatch } from "../store"
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"
import { setLoading, setError} from "../reducers/AuthSlice"
import { setUser } from "../reducers/UserSlice"
import { AuthUserDataString } from "../../types/actionsTypes"


export const asyncLoginAction = (email: AuthUserDataString, password: AuthUserDataString) => async (dispatch: AppDispatch) => {
    
    try {
        // dispatch(setLoading(true))
        // const auth = getAuth()
        // signInWithEmailAndPassword(auth, email, password)
		// 	.then(({user}) => {
		// 		dispatch(setUser({
		// 			id: user.uid,
		// 			email: user.email
		// 		}))
		// 		localStorage.setItem('userData', JSON.stringify({
		// 			id: user.uid, email: user.email
		// 		}))
		// 	})
		// 	.catch((error) => {
		// 		dispatch(setError(error.message))
		// 		setTimeout(() => {
		// 			dispatch(setError(''))
		// 		}, 2000)
		// 	})
		dispatch(setLoading(true))
        const auth = getAuth()
        const response = await signInWithEmailAndPassword(auth, email, password)
		dispatch(setUser({id: response.user.uid, email: response.user.email}))
		localStorage.setItem('userData', JSON.stringify({id: response.user.uid, email: response.user.uid}))
    } catch (e: any) {
        dispatch(setError(e.message))
		setTimeout(() => {
			dispatch(setError(''))
		}, 2000)
    } finally {
        dispatch(setLoading(false))
    }
}