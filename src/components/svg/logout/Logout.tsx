import React from 'react'
import c from '../../navigationMenu/navigationMenu.module.css'
import { useAppDispatch } from '../../../hooks/redux'
import { removeUser } from '../../../store/reducers/UserSlice'
import { signOut } from "firebase/auth"
import { auth, db } from '../../../firebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'

const Logout = () => {

    const dispatch = useAppDispatch()
    const logoutHandler = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser!.uid), {
            isOnline: false
        })
        await signOut(auth)
        dispatch(removeUser())
        // navigate('/login')
        // dispatch(setStatus(false))
        // localStorage.removeItem('userData')

        // dispatch(setMainUserLoading(false))
    }

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={c.navIcon}
            onClick={logoutHandler} 
            viewBox="0 0 20 20" 
            fill="currentColor"
        >
        <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd" 
        />
        </svg>
    )
}

export default Logout