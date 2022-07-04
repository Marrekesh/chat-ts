import { AppDispatch } from "../store"
import { auth, db } from "../../firebase/firebase"
import { doc,   getDoc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { setMainUserError, setMainUserLoading } from "../reducers/MainUserSlice"
import { setUser, setLoginUser } from "../reducers/UserSlice"
import { setImgProfileUrl } from "../reducers/ProfileSlice"

export const asyncGetMainUserAction = () => async (dispatch: AppDispatch) => {
    try {
        // 
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid && user?.email) {
                dispatch(setMainUserLoading(true)) 
                await getDoc( doc(db, 'users', auth.currentUser!.uid)).then((docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data()
                        dispatch(setUser({name: data.name, surname: data.surname, email: data.email, id: data.uid, isOnline: data.isOnline, avatar: data.avatar }))
                        dispatch(setImgProfileUrl(data.avatar))
                        if (data.isOnline === 'Online') {
                            dispatch(setLoginUser({email: user.email, id: user.uid}))
                        }
                    }
        
                }).finally(() => {
                    dispatch(setMainUserLoading(false))
                })  
            }
		})
    } catch (error: any) {
        dispatch(setMainUserError(error.message))
        setMainUserError('')
        dispatch(setMainUserLoading(false))
    } 
}