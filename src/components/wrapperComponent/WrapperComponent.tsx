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
    const online = useAppSelector(state => state.userReducer.user.isOnline)

    useEffect(() => {
        // dispatch(setMainUserLoading(true))
            dispatch(asyncGetMainUserAction())
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