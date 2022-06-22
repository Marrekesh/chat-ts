import { useAppSelector, useAppDispatch } from "./redux";
import { useCallback, useEffect } from "react";
import {setUser} from '../store/reducers/UserSlice'

type IStorage = string
const storageName: IStorage = 'userData'

export function useAuth() {
    const dispatch = useAppDispatch()
    const {id, email} = useAppSelector(state => state.userReducer)
    
    return {
        isAuth: !!email,
        email,
        id,

    }
}