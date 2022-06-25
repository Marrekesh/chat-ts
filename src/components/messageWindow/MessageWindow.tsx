import AddMessageForm  from '../addMessageForm/AddMessageForm'
import MessageItem from '../../components/messageItem/MessageItem'
import c from './messageWindow.module.css'
import { useAppSelector } from '../../hooks/redux'


const MessageWindow = () => {
    
    const {avatar, name, surname} = useAppSelector(state => state.userReducer.user)

    return (
        <div className={c.messageWindow}>
            <div className={c.messageHeader}>
                <img className={c.img} src={avatar || require('../../images/img-not-found.jpg')} alt="avatar" />
                <div className={c.messageHeaderName}>
                    {`${name} ${surname}`}
                </div>
            </div>
            <div className={c.messageItemWrapper}>
                <MessageItem/>
            </div>
            <AddMessageForm/>
        </div>
    )
}

export default MessageWindow