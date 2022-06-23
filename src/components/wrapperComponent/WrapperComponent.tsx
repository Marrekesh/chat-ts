import { useEffect } from "react"
import { setMainUser, setMainUserLoading } from "../../store/reducers/MainUserSlice"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { asyncGetMainUserAction } from "../../store/actionsCreator/asyncGetMainUser"
import Loader from "../loader/Loader"
import { useAuth } from "../../hooks/useAuth"

const WrapperComponent = ({children}: any) => {
    let a = false
    const loading = useAppSelector(state => state.mainUserReduser.loading)
    const dispatch = useAppDispatch()
    const {isAuth} = useAuth()
    
    useEffect(() => {
        dispatch(setMainUserLoading(true))
       
        dispatch(asyncGetMainUserAction())

        setTimeout(() => {
            dispatch(setMainUserLoading(false))
        }, 500)
    }, [])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {children}
        </>
    )
}

export default WrapperComponent