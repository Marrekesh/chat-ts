import { FC, useEffect, useState } from 'react'
import c from './userListItem.module.css'
import { IChatUser } from '../../store/reducers/ChatUserSlice'
import { onSnapshot, doc } from "firebase/firestore";
import { db } from '../../firebase/firebase'

interface UsersItemProps {
    user: IChatUser,
    user1: any
    selectUser: (user: IChatUser) => void
}

const UserListItem: FC<UsersItemProps> = ({user, selectUser, user1}) => {
    
    const user2 = user?.uid

    const [data, setData] = useState<any>('')

    useEffect(() => {
        
        const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
        let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
          setData(doc.data());
        });

        return () => unsub();
      }, []);

    const status = !user.isOnline ? <div className={c.status}>&bull;</div> : <div className={`${c.status} ${c.active}`}>&bull;</div>

    return (
        <div className={c.userListItem} onClick={() => selectUser(user)}>
            <div className={c.textBlock}>
                <img className={c.image} src={user.avatar || require('../../images/img-not-found.jpg')} alt="photo" />
                <div className={c.name}>{user.name}</div>
            </div>
            {status}
        </div>
    )
}

export default UserListItem