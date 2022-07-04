import { AppDispatch } from "../store"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setLoading, setError} from "../reducers/RegisterSlice"
import { AuthUserDataString } from "../../types/actionsTypes"
import { errorChanger } from "../../services/errorChanger"
import { auth, db } from "../../firebase/firebase"
import { setDoc, doc, Timestamp } from "firebase/firestore"

import { removeRegisterState } from "../reducers/RegisterSlice"

export const asyncRegistrAction = (name: AuthUserDataString, surname: AuthUserDataString,  email: AuthUserDataString, password: AuthUserDataString) => async (dispatch: AppDispatch) => {
    
    try {
        dispatch(setLoading(true))
        const response = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, 'users', response.user.uid), {
            uid: response.user.uid,
            name,
            email,
            surname,
            createdAt: Timestamp.fromDate(new Date()),
            isOnline: 'offline',
        })
        dispatch(removeRegisterState())
    } catch (error: any) {
        dispatch(setError(errorChanger(error.message)))
        setTimeout(() => {
            dispatch(setError(''))
        }, 2000)
    } finally {
        dispatch(setLoading(false))
    }
}