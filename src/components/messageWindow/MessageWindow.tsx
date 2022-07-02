import AddMessageForm  from '../addMessageForm/AddMessageForm'
import MessageItem from '../../components/messageItem/MessageItem'
import c from './messageWindow.module.css'
import { useAppSelector } from '../../hooks/redux'
import { collectionGroup, query, where, onSnapshot,  collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'
import { useState } from 'react'
import { setText } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { setImgUrl } from '../../store/reducers/MessagesSlice'
import { asyncCreateMessage } from '../../store/actionsCreator/asyncCreateMessage'

const MessageWindow = () => {

    // const [text, setText] = useState('')
    // const [img, setImg] = useState<any>('')
    const chatUser = useAppSelector(state => state.chatUserSliceReducer.chatUser)
    const {text, messages} = useAppSelector(state => state.messageReducer)
    const dispatch = useAppDispatch()
    const url = useAppSelector(state => state.messageReducer.img)
    const user1 = auth.currentUser?.uid
    const user2 = chatUser.uid

    async function handleSubmit(e: any) {
		e.preventDefault()

		const user2 = chatUser.uid
        
        const id = user1! > user2 ? `${user1 + user2}` : `${user2 + user1}`;

        await dispatch(asyncCreateMessage(text, user1, user2, url, id))
        dispatch(setImgUrl(''))
        dispatch(setText(''))
        // let url;
        // if (img) {
        //     const imgRef = ref(storage, `images/${new Date().getTime()} - ${img.name}`)
        //     const snap = await uploadBytes(imgRef, img)
        //     const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath))
        //     url = dlUrl
        //     console.log(url)
        // }

        // await addDoc(collection(db, 'messages', id, 'chat'), {
        //     text,
        //     from: user1,
        //     to: user2,
        //     createdAd: Timestamp.fromDate(new Date()),
        //     media: url || ''
        // })

        // await setDoc(doc(db, "lastMsg", id), {
        //     text,
        //     from: user1,
        //     to: user2,
        //     createdAt: Timestamp.fromDate(new Date()),
        //     media: url || "",
        //     unread: true,
        // });
        // dispatch(setText(''))
        // dispatch(setImgUrl(''))
	}
    
    const content = chatUser.name  ? 
                    <>
                        <div className={c.messageHeader}>
                            <img className={c.img} src={chatUser.avatar} alt="avatar" />
                            <div className={c.messageHeaderName}>
                                {`${chatUser.name} ${chatUser.surname}`}
                            </div>
                        </div>
                        <div className={c.messageItemWrapper}>
                            {messages.map((message, i) => <MessageItem key={i} user1={user1} user2={user2} message={message}/>)}
                        </div>
                        <AddMessageForm handleSubmit={handleSubmit}/>
                    </>

                    :
                    <div className={c.messageItemWrapper}>
                        <div className={c.infoBLock}>
                            <h2>Select user</h2>
                        </div>
                    </div>




           //&& (messages[0]?.from === user1 && messages[0]?.to === user2) || (messages[0]?.from === user2 && messages[0]?.from === user1)

    return (
        <div className={c.messageWindow}>
            {content}
        </div>
    )
}

export default MessageWindow