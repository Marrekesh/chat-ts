import React, { FC } from 'react'
import TextArea from '../ui/textarea/TextArea'
import Form from '../ui/form/Form'
import c from './addMessageForm.module.css'
import t from '../ui/textarea/textArea.module.css'
import { setText } from '../../store/reducers/MessagesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import MyButton from '../ui/button/MyButton'
import btnClass from '../ui/button/myButton.module.css'
import Upload from '../svg/upload/Upload'
import { asyncGetImgInMessageAction } from '../../store/actionsCreator/asyncAddImgInMessage'

const Arrow = require('../../icons/arrow.png')

interface AddMessageProps {
	handleSubmit: (e: any) => void,
}

const AddMessageForm: FC<AddMessageProps> = ({ handleSubmit}) => {

	const dispatch = useAppDispatch()
	const {text} = useAppSelector(state => state.messageReducer)

	const setTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setText(e.target.value))
	}

	const setImgHandler = (e: any) => {
		// dispatch(setImg(e.target.files[0]))
		dispatch(asyncGetImgInMessageAction(e.target.files[0]))
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
					onChange={setImgHandler}
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