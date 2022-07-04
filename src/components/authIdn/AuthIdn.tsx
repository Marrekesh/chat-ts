import { FC } from 'react'
import c from './authidn.module.css'
import { useAppDispatch } from '../../hooks/redux'

import { auth, db } from '../../firebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'


import { useAppSelector } from '../../hooks/redux'
import Spinner from '../spinner/Spinner'
import spinCss from '../spinner/spinner.module.css'


const AuthIdn: FC = () => {
    const {name} = useAppSelector(state => state.userReducer.user)
    const {img, imgProfileLoading} = useAppSelector(state => state.profileReducer)

    const onChangeHandler = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        await updateDoc(doc(db, 'users', auth.currentUser!.uid), {
            isOnline: e.target.value
        })
        
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
                    </div>

                    <select className={c.select} onChange={onChangeHandler}>
                        <option value='Online'>Online</option>
                        <option value='Offline'>Offline</option>
                        <option value='Sleep'>Sleep</option>
                    </select>
                </div>
            </div>
        </>

        )

    }

export default AuthIdn