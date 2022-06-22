import AddMessageForm  from '../addMessageForm/AddMessageForm'
import MessageItem from '../../components/messageItem/MessageItem'
import c from './messageWindow.module.css'

const MessageWindow = () => {
    
    return (
        <div className={c.messageWindow}>
            <div className={c.messageHeader}>
                <div className={c.messageHeaderName}>
                    Abu Abdullah Nugraha
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