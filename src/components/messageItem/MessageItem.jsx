import React from 'react'
import c from './messageItem.module.css'

const Img = require('../../images/avatar.jpg')

const MessageItem = () => {
    return (
        <div className={c.messageItem}>
            <img className={c.img} src={Img} alt="avka" />
            <div className={c.textMessage}>
                lorem*60
            </div>
        </div>
        // <div className={`${c.messageItem} ${c.messageItemLeft}`}>
        //     <div className={`${c.textMessage} ${c.textMessageLeft}`}>
        //         lorem*60
        //     </div>
        //     <img className={`${c.img} ${c.imgLeft}`} src={Img} alt="avka" />
        // </div>
    )
}

export default MessageItem