import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { asyncGetMainUserAction } from "../../store/actionsCreator/asyncGetMainUser"
import Loader from "../loader/Loader"

const WrapperComponent = ({children}: any) => {
    const loading = useAppSelector(state => state.mainUserReduser.loading)
    const dispatch = useAppDispatch()

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