import AddMessageForm  from '../addMessageForm/AddMessageForm'
import MessageItem from '../../components/messageItem/MessageItem'
import c from './messageWindow.module.css'
import { useAppSelector } from '../../hooks/redux'
import { collectionGroup, query, where, onSnapshot,  collection, addDoc, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'
import { useState } from 'react'

const MessageWindow = () => {

    const [text, setText] = useState('')
    const [img, setImg] = useState<any>('')
    const user = useAppSelector(state => state.chatUserSliceReducer.chatUser)


    const user1 = auth.currentUser?.uid


    async function handleSubmit(e: any) {
		e.preventDefault()

		const user2 = user.uid
        
        const id = user1! > user2 ? `${user1 + user2}` : `${user2 + user1}`;

        let url;
        if (img) {
            const imgRef = ref(storage, `images/${new Date().getTime()} - ${img.name}`)


            const snap = await uploadBytes(imgRef, img)
            const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath))
            url = dlUrl
        }

        await addDoc(collection(db, 'messages', id, 'chat'), {
            text,
            from: user1,
            to: user2,
            createdAd: Timestamp.fromDate(new Date()),
            media: url || ''
        })
        setText('')

	}
    
    const content = user.name ? 
                    <>
                        <div className={c.messageHeader}>
                            <img className={c.img} src={user.avatar} alt="avatar" />
                            <div className={c.messageHeaderName}>
                                {`${user.name} ${user.surname}`}
                            </div>
                        </div>
                        <div className={c.messageItemWrapper}>
                            <MessageItem/>
                        </div>
                        <AddMessageForm handleSubmit={handleSubmit} text={text} setText={setText}/>
                    </>

                    :

                    <div className={c.infoBLock}>
                        <h2>Select user</h2>
                    </div>



           

    return (
        <div className={c.messageWindow}>
            {content}
        </div>
    )
}

export default MessageWindow