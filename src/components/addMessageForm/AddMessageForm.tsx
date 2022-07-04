import React, { FC } from 'react'
import TextArea from '../ui/textarea/TextArea'
import c from './addMessageForm.module.css'
import t from '../ui/textarea/textArea.module.css'
import { setText } from '../../store/reducers/MessagesSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import MyButton from '../ui/button/MyButton'
import btnClass from '../ui/button/myButton.module.css'
import Upload from '../svg/upload/Upload'
import { asyncGetImgInMessageAction } from '../../store/actionsCreator/asyncGetImgInMessageAction'
import Spinner from '../spinner/Spinner'
import spin from '../spinner/spinner.module.css'
import { imgNameChange } from '../../services/fileNameChanger'

interface AddMessageProps {
	handleSubmit: (e: any) => void,
}

const AddMessageForm: FC<AddMessageProps> = ({ handleSubmit}) => {

	const dispatch = useAppDispatch()
	const {text, isLoadingImg} = useAppSelector(state => state.messageReducer)
	const imgName = useAppSelector(state => state.messageReducer.imgName)
	const finallyImgName = imgNameChange(imgName)


	const setTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setText(e.target.value))
	}

	const setImgHandler = async (e: any) => {
		await dispatch(asyncGetImgInMessageAction(e.target.files[0]))
	}

	return (
		<>
			<form className={c.addMessageWrapper} onSubmit={handleSubmit}>
				<TextArea placeholder='Type your message...' className={t.addtextarea} value={text} onChange={setTextHandler}/>
				<label className={c.label} htmlFor="img">
					{isLoadingImg ? <Spinner className={`${spin.spinner} ${spin.spinnerSmall}`}/> : <Upload/>}
				</label>
				<input
					onChange={setImgHandler}
					name='img'
					type='file'
					id='img'
					accept='image/*'
					className={c.input}
				/>				
				<MyButton className={btnClass.btn}>Send</MyButton>
			</form>
			{!isLoadingImg && <div className={c.fileBlock}>{finallyImgName}</div>}
		</>

	)
}
export default AddMessageForm