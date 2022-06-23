import { FC } from 'react'
import c from './authidn.module.css'
import MyButton from '../ui/button/MyButton'
import btnClass from '../ui/button/myButton.module.css'
import { useAppDispatch } from '../../hooks/redux'
import { removeUser } from '../../store/reducers/UserSlice'
import { signOut } from "firebase/auth"
import { auth, db } from '../../firebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { setStatus } from '../../store/reducers/AuthSlice'
import { setMainUserLoading } from '../../store/reducers/MainUserSlice'
import buttonClasses from '../ui/button/myButton.module.css'
import { useNavigate } from 'react-router-dom'

const AuthIdn: FC = () => {
        const dispatch = useAppDispatch()
        const navigate = useNavigate()

        const logoutHandler = async () => {
            await updateDoc(doc(db, 'users', auth.currentUser!.uid), {
                isOnline: false
            })
            await signOut(auth)
            dispatch(removeUser())
            navigate('/login')
            // dispatch(setStatus(false))
            // localStorage.removeItem('userData')

            // dispatch(setMainUserLoading(false))
        }

        return (
            <>       
            <div className={c.wrapper}>
                <img className={c.img} src="https://i.pinimg.com/736x/b3/a6/32/b3a632a5547d22c553075514add449db.jpg" alt="user" />
                <div className={c.info}>
                    <div className="named">
                        <span className={c.name}>Doronin</span>
                        <span className={c.name}>Dmytro</span>
                        <span className={c.name}>Romanovich</span>
                    </div>
                    <div className={c.status}>
                        <div className={c.statusText}>Avaliable</div> 
                        <div className={c.statusArrow}>&lsaquo;</div>
                    </div>
                </div>
                <MyButton onClick={logoutHandler} className={`${btnClass.btn} ${btnClass.btnMini}`}>Logout</MyButton>
                <Link to="/profile">
                        <MyButton className={buttonClasses.btn}>Profile</MyButton>
                </Link>
            </div>
            </>

        )

    }

export default AuthIdn