import { AppDispatch } from "../store"
import { AuthUserDataString } from "../../types/actionsTypes"
import { errorChanger } from "../../services/errorChanger"
import { auth, db } from "../../firebase/firebase"
import { doc,  updateDoc } from "firebase/firestore"

//new
import { onAuthStateChanged } from "firebase/auth"
import { setMainUser, setMainUserError, setMainUserLoading } from "../reducers/MainUserSlice"
import { setUser } from "../reducers/UserSlice"

export const asyncGetMainUserAction = () => async (dispatch: AppDispatch) => {
    try { 
        onAuthStateChanged(auth, async (user) => {

            dispatch(setUser({email :user!.email, id: user!.uid}))

		})

		// localStorage.setItem('userData', JSON.stringify({id: response.user.uid, email: response.user.uid}))
    } catch (error: any) {
        dispatch(setMainUserError(error.message))
		// setTimeout(() => {
		// 	dispatch(setError(''))
		// }, 2000)
        setMainUserError('')
    } 
}