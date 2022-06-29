import { FC, useEffect, useState } from 'react'
import c from './userListItem.module.css'
import { IChatUser } from '../../store/reducers/ChatUserSlice'
import { onSnapshot, doc } from "firebase/firestore";
import { db } from '../../firebase/firebase'
import { useAppSelector } from '../../hooks/redux'
// import { asyncAddLastMessage } from '../../store/actionsCreator/asyncAddLastMessage'
import { useAppDispatch } from '../../hooks/redux'
import { setLastMessage, LastMessage } from '../../store/reducers/MessagesSlice'


interface UsersItemProps {
    user: IChatUser,
    user1: any
    selectUser: (user: IChatUser) => void
}

const UserListItem: FC<UsersItemProps> = ({user, selectUser, user1}) => {
    const dispatch = useAppDispatch()
    const user2 = user?.uid
    const chatUser = useAppSelector(state => state.chatUserSliceReducer.chatUser)
    
    // const data = useAppSelector(state => state.messageReducer.lastMessage)
    // console.log(typeof data)
    // useEffect(() => {
        
    //     const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    //     let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
    //         let item = doc.data()
    //         dispatch(setLastMessage({
    //             createdAd: {
    //                 seconds: item!.createdAt.seconds,
    //                 nanoseconds: item!.createdAt.nanoseconds
    //             },
    //             from: item!.from,
    //             to: item!.to,
    //             text: item!.text,
    //             media: item!.media,
    //             unread: item!.unread
    //         }))
    //     });
    //     return () => unsub();
    //   }, []);


    const [data, setData] = useState<any>('')
    console.log(data)
    useEffect(() => {
      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
      let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
        
        setData(doc.data());
      });
      return () => unsub();
    }, []);

    const status = !user.isOnline ? <div className={c.status}>&bull;</div> : <div className={`${c.status} ${c.statusActive}`}>&bull;</div>

    return (
        <div className={`${c.userListItem} ${chatUser.name === user.name && c.active}`} onClick={() => selectUser(user)}>
            <div className={c.textBlock}>
                <img className={c.image} src={user.avatar || require('../../images/img-not-found.jpg')} alt="photo" />
                <div className={c.nameAndMessage}>
                    <div className={c.name}>{user.name}
                     {data?.from !== user1 && data?.unread && <small className={c.unread}>New</small>} 
                    </div>
                    
                    {data && <div className={c.message}>
                    <strong className={c.strong}>{data.from === user1 ? 'Me: ': user.name + ':' }</strong> {data.text}
                    </div>}
                    {/* <div className={c.message}>asd</div> */}
                </div>

            </div>
             
            {status}
        </div>
       
    )
}

export default UserListItem