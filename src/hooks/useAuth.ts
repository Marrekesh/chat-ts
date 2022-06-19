import { useAppSelector, useAppDispatch } from "./redux";
import { useCallback, useEffect } from "react";
import {setUser} from '../store/reducers/UserSlice'

type IStorage = string
const storageName: IStorage = 'userData'

export function useAuth() {
    const dispatch = useAppDispatch()
    const {id, email} = useAppSelector(state => state.userReducer)
    
    // const setToLocalStorage = useCallback((id: string, email: string | null) => {

    //     // dispatch(setUser({id, email}))

    //     localStorage.setItem(storageName, JSON.stringify({
    //         id: id, email: email
    //     }))
    // }, [])

    // const removeLocaleStorage = useCallback(() => {

    //     localStorage.removeItem(storageName)
    // }, [])

	// useEffect(() => {

	// 	const data = JSON.parse(localStorage.getItem(storageName) || "{}")

	// 	if (data && data.email) {
	// 		dispatch(dispatch(setUser({
	// 			id: data.id,
	// 			email: data.email
	// 		})))
	// 	}
	
	// }, [])

    return {
        isAuth: !!email,
        email,
        id,

    }
}