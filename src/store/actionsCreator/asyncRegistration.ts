import { AppDispatch } from "../store"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {setStatus, setLoading, setError} from "../reducers/RegisterSlice"

// import { useNavigate } from "react-router-dom"
export const asyncRegistrAction = (email: string, password: string) => async (dispatch: AppDispatch) => {
    
    try {
        dispatch(setLoading(true))
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
              alert('ZAREGANO')
            })
            .catch((error) => {
				dispatch(setError(error.message))
                setTimeout(() => {
					dispatch(setError(''))
				}, 2000)
			})
    } catch (e) {
        console.log('Не смог зарегать')
    } finally {
        dispatch(setLoading(false))
        setStatus(false)
    }
}