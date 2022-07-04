import AddMessageForm  from '../addMessageForm/AddMessageForm'
import MessageItem from '../../components/messageItem/MessageItem'
import c from './messageWindow.module.css'
import { useAppSelector } from '../../hooks/redux'
import { db, auth } from '../../firebase/firebase'
import { setText } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { setImgUrl } from '../../store/reducers/MessagesSlice'
import { asyncCreateMessage } from '../../store/actionsCreator/asyncCreateMessage'
import { removeImgName } from '../../store/reducers/MessagesSlice'

const MessageWindow = () => {

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
        dispatch(removeImgName())
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

    return (
        <div className={c.messageWindow}>
            {content}
        </div>
    )
}

export default MessageWindow