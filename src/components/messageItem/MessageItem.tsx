import React from 'react'
import c from './messageItem.module.css'

const Img = require('../../images/avatar.jpg')

const MessageItem = () => {
    let key = 1
    

    const messages = [
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я левое сообщение', position: 'left'},
        {text: 'Я правое сообщение', position: 'right'},
        {text: 'Я левое сообщение', position: 'left'},
        
    ]


    return (
        <>
            {messages.map(message => {
                
                if ( message.position === 'left') {
                    return (
                        <div key={key++} className={c.wrapperS}>
                            <div className={c.messageItem}>
                                <img className={c.img} src={Img} alt="avka" />
                                
                                <div className={c.textMessage}>
                                    <div className={c.triangle}></div>
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    )
                    } else if(message.position === 'right' ) {
                        return (
                            <div key={key++} className={` ${c.wrapperS} ${ c.wrapperSRight}`}>
                                <div className={`${c.messageItem} ${c.messageItemRight}`}>
                                    <div className={`${c.textMessage} ${c.textMessageLeft}`}>
                                    <div className={c.triangleRight}></div>
                                        {message.text}
                                    </div>
                                    <img className={`${c.img} ${c.imgLeft}`} src={Img} alt="avka" />
                                </div>
                        </div>
                    )  
                }
            })}
        </>

    )
}

export default MessageItem