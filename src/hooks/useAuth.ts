import { useAppSelector, useAppDispatch } from "./redux";


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