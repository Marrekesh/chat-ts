import React, { FC, useRef, useEffect } from 'react'
import c from './messageItem.module.css'
import { IMessage } from '../../store/reducers/MessagesSlice'

const Img = require('../../images/img-not-found.jpg')

interface MessageItemProps {
    message: IMessage,
    user1: string | undefined,
    user2: string
}

const MessageItem: FC<MessageItemProps> = ({message, user1, user2}) => {
    
    
    const scrollRef: any = useRef()

    useEffect(() => {
        scrollRef.current!.scrollIntoView({behavior: 'smooth'})
    }, [message])


    const img = message.media ? <img className={c.img} src={message.media} alt="img" /> : null
    const text = message.text

    const userClassesConten = message.from === user1 ?
    
    
                                                <div ref={scrollRef} className={` ${c.wrapperS} ${ c.wrapperSRight}`}>
                                                    <div className={`${c.messageItem} ${c.messageItemRight}`}>
                                                        <div className={`${c.textMessage} ${c.textMessageRight}`}>
                                                        {img}
                                                        {text}
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                <div ref={scrollRef} className={c.wrapperS}>
                                                    <div className={c.messageItem}>                                        
                                                        <div className={c.textMessage}>          
                                                            {img}
                                                            {text}
                                                        </div>
                                                    </div>
                                                </div>

    return (
        <>
            {userClassesConten}
        </>

    )
}

export default MessageItem