import React, { FC } from 'react'
import TextArea from '../ui/textarea/TextArea'
import Form from '../ui/form/Form'
import c from './addMessageForm.module.css'
import t from '../ui/textarea/textArea.module.css'
const Arrow = require('../../icons/arrow.png')

interface AddMessageProps {
  text: string,
  setText:(text: string) => void
  handleSubmit: (e: any) => void
}

const AddMessageForm: FC<AddMessageProps> = ({text, setText, handleSubmit}) => {

  return (
    <form className={c.addMessageWrapper} onSubmit={handleSubmit}>
          <TextArea placeholder='Type your message...' className={t.addtextarea} value={text} onChange={(e: any) => setText(e.target.value)}/>
          {/* <div className={c.circle}>
            <img src={Arrow} alt="arrov"/>
          </div> */}
          <button>Send</button>
    </form>
  )
}
export default AddMessageForm