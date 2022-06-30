import { FC, useEffect } from 'react'
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
import { useAppSelector } from '../../hooks/redux'
import Spinner from '../spinner/Spinner'
import spinCss from '../spinner/spinner.module.css'

const AuthIdn: FC = () => {
    const {name} = useAppSelector(state => state.userReducer.user)
    const {img, imgProfileLoading} = useAppSelector(state => state.profileReducer)

    const onChangeHandler = (e: any) => {
        console.log(e.target.value)
    }

    return (
        <>       
            <div className={c.wrapper}>
                {imgProfileLoading 
                ? 
                <Spinner className={`${spinCss.spinner} ${spinCss.spinnerSmall} ${spinCss.white}`}/> 
                : 
                <img className={c.img} src={img || require('../../images/img-not-found.jpg')} alt="user" />
                }
                <div className={c.info}>
                    <div className={c.named}>
                        <span className={c.name}>{name}</span>
                        {/* <span className={c.name}>Dmytro</span>
                        <span className={c.name}>Romanovich</span> */}
                    </div>
                    {/* <div className={c.status}>
                        <div className={c.statusText}>Avaliable</div> 
                        <div className={c.statusArrow}>&lsaquo;</div>
                    </div> */}
                    <select className={c.select} onChange={onChangeHandler}>
                        <option value='Avaliable'>Avaliable</option>
                        <option value='Offline'>Offline</option>
                        <option value='AFK'>AFK</option>
                    </select>
                </div>
            </div>
        </>

        )

    }

export default AuthIdn