import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import Input from '../ui/input/Input'
import inpCls from '../ui/input/input.module.css'
import { filterUser } from '../../store/reducers/UsersListSlice'

const FiltrationUsers = () => {

    const dispatch = useAppDispatch()

    const filterUsersHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterUser(e.target.value))
    }

    return (
        <>
            <Input onChange={filterUsersHandler} placeholder='User search ...' className={`${inpCls.input} ${inpCls.inputSearch}`}/>
        </>
    )
}

export default FiltrationUsers