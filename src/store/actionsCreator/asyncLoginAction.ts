import { AppDispatch } from "../store"
import { signInWithEmailAndPassword  } from "firebase/auth"
import { setLoading, setError} from "../reducers/AuthSlice"
import { setUser, setLoginUser} from "../reducers/UserSlice"
import { AuthUserDataString } from "../../types/actionsTypes"
import { errorChanger } from "../../services/errorChanger"
import { auth, db } from "../../firebase/firebase"
import { doc,  updateDoc, getDoc } from "firebase/firestore"


export const asyncLoginAction = (email: AuthUserDataString, password: AuthUserDataString) => async (dispatch: AppDispatch) => {
    
    try {
		dispatch(setLoading(true))
        const response = await signInWithEmailAndPassword(auth, email, password)
        await updateDoc(doc(db, 'users', response.user.uid), {
            isOnline: 'Online'
        })
        await getDoc(doc(db, 'users', auth.currentUser!.uid)).then((docSnap) => {
            if(docSnap.exists()) {
                const data = docSnap.data()
                dispatch(setUser({name: data.name, surname: data.surname, email: response.user.email, id: data.uid, isOnline: data.isOnline, avatar: data.avatar }))
            }
		})
		dispatch(setLoginUser({email: response.user.email, id: response.user.uid}))
    } catch (error: any) {
        dispatch(setError(errorChanger(error.message)))
		setTimeout(() => {
			dispatch(setError(''))
		}, 2000)
    } finally {
        dispatch(setLoading(false))
    }
}