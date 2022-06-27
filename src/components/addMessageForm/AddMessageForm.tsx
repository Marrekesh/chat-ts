import React, { FC } from 'react'
import TextArea from '../ui/textarea/TextArea'
import Form from '../ui/form/Form'
import c from './addMessageForm.module.css'
import t from '../ui/textarea/textArea.module.css'
import { setText } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import MyButton from '../ui/button/MyButton'
import btnClass from '../ui/button/myButton.module.css'
import Upload from '../svg/upload/Upload'

const Arrow = require('../../icons/arrow.png')

interface AddMessageProps {
	text: string,
	handleSubmit: (e: any) => void,
	setImg: (img: any) => void
}

const AddMessageForm: FC<AddMessageProps> = ({text, handleSubmit, setImg}) => {

	const dispatch = useAppDispatch()

	const setTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setText(e.target.value))
	}

	return (
		<form className={c.addMessageWrapper} onSubmit={handleSubmit}>
				<TextArea placeholder='Type your message...' className={t.addtextarea} value={text} onChange={setTextHandler}/>
				{/* <div className={c.circle}>
					<img src={Arrow} alt="arrov"/>
				</div> */}
				<label style={{marginRight: '10px', cursor: 'pointer'}} htmlFor="img">
					<Upload/>
				</label>
				<input
					onChange={(e: any) => setImg(e.target.files[0])}
					type='file'
					id='img'
					accept='image/*'
					style={{display: 'none'}}
				/>
				<MyButton className={btnClass.btn}>Send</MyButton>
		</form>
	)
}
export default AddMessageForm