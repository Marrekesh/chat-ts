import c from './messageWindow.module.css'

const MessageWindow = () => {
    return (
        <div className={c.messageWindow}>
            <div className='messageHeader'>
                <div className={c.messageHeaderName}>
                    Abu Abdullah Nugraha
                </div>
            </div>
        </div>
    )
}

export default MessageWindow