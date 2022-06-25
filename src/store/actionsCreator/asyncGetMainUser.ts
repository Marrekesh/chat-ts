import { AppDispatch } from "../store"
import { AuthUserDataString } from "../../types/actionsTypes"
import { errorChanger } from "../../services/errorChanger"
import { auth, db } from "../../firebase/firebase"
import { doc,  updateDoc, getDoc } from "firebase/firestore"
import { IUser } from "../reducers/UserSlice"
//new
import { onAuthStateChanged } from "firebase/auth"
import { setMainUser, setMainUserError, setMainUserLoading } from "../reducers/MainUserSlice"
import { setUser, setLoginUser } from "../reducers/UserSlice"
import { useAuth } from "../../hooks/useAuth"

export const asyncGetMainUserAction = () => async (dispatch: AppDispatch) => {
    console.log('run')
    try {
        // 
        onAuthStateChanged(auth, async (user) => {
            console.log(user)
            if (user?.uid && user?.email) {
                dispatch(setMainUserLoading(true)) 
                // dispatch(setUser({name: user.name, surname: user.surname, email: user.email, id: user.uid, isOnline: user.isOnline}))
                await getDoc( doc(db, 'users', auth.currentUser!.uid)).then((docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data()
                        // dispatch(setMainUserLoading(true)) 
                        dispatch(setUser({name: data.name, surname: data.surname, email: data.email, id: data.uid, isOnline: data.isOnline, avatar: data.avatar }))
                        // dispatch(setMainUserLoading(false))
                        if (data.isOnline === true) {
                            dispatch(setLoginUser({email: user.email, id: user.uid}))
                        }
                        
                    }
        
                }).finally(() => {
                    dispatch(setMainUserLoading(false))
                })  
            }
		})
		// localStorage.setItem('userData', JSON.stringify({id: response.user.uid, email: response.user.uid}))
    } catch (error: any) {
        dispatch(setMainUserError(error.message))
		// setTimeout(() => {
		// 	dispatch(setError(''))
		// }, 2000)
        setMainUserError('')
        dispatch(setMainUserLoading(false))
    } 
}