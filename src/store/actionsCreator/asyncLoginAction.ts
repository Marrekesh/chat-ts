import { AppDispatch } from "../store"
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"
import { setLoading, setError, setStatus} from "../reducers/AuthSlice"
import { setUser, } from "../reducers/UserSlice"
import { AuthUserDataString } from "../../types/actionsTypes"
import { errorChanger } from "../../services/errorChanger"
import { auth, db } from "../../firebase/firebase"
import { doc,  updateDoc } from "firebase/firestore"
import { setMainUserLoading } from "../reducers/MainUserSlice"
export const asyncLoginAction = (email: AuthUserDataString, password: AuthUserDataString) => async (dispatch: AppDispatch) => {
    
    try {
		dispatch(setLoading(true))
        const response = await signInWithEmailAndPassword(auth, email, password)
        await updateDoc(doc(db, 'users', response.user.uid), {
            isOnline: true
        })
		dispatch(setUser({id: response.user.uid, email: response.user.email}))
		// localStorage.setItem('userData', JSON.stringify({id: response.user.uid, email: response.user.uid}))
    } catch (error: any) {
        dispatch(setError(errorChanger(error.message)))
		setTimeout(() => {
			dispatch(setError(''))
		}, 2000)
    } finally {
        dispatch(setLoading(false))
    }
}