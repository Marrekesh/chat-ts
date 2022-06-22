import React from 'react'
import TextArea from '../ui/textarea/TextArea'
import Form from '../ui/form/Form'
import c from './addMessageForm.module.css'
import t from '../ui/textarea/textArea.module.css'
const Arrow = require('../../icons/arrow.png')

const AddMessageForm = () => {

  return (
    <div className={c.addMessageWrapper}>
          <TextArea placeholder='Type your message...' className={t.addtextarea}/>
          <div className={c.circle}>
            <img src={Arrow} alt="arrov"/>
          </div>
    </div>
  )
}
export default AddMessageForm