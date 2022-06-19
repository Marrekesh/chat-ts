import { AppDispatch } from "../store"
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"
import { setLoading, setError} from "../reducers/AuthSlice"
import { setUser } from "../reducers/UserSlice"

export const asyncLoginAction = (email: string, password: string) => async (dispatch: AppDispatch) => {
    
    try {
        dispatch(setLoading(true))
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					id: user.uid,
					email: user.email
				}))
				localStorage.setItem('userData', JSON.stringify({
					id: user.uid, email: user.email
				}))
			})
			.catch((error) => {
				dispatch(setError(error.message))
				setTimeout(() => {
					dispatch(setError(''))
				}, 2000)
			})
    } catch (e) {
        console.log('Не смог зайти')
    } finally {
        dispatch(setLoading(false))
    }
}