import React, { FC } from "react"
import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import NavBar from '../../components/navbar/NavBar';
import AlertBlock from "../../components/alert/AlertBlock"

import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { registerSlice} from "../../store/reducers/RegisterSlice"
import { asyncRegistrAction } from "../../store/actionsCreator/asyncRegistration"

import classes from './signUpPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'


const SignUpPage: FC = () => {
	const {isLoading, error, status} = useAppSelector(state => state.registerStateReducer)
	const state = useAppSelector(state => state.registerStateReducer.registrState)
	const {name, surname, link} = useAppSelector(data => data.registerStateReducer.registrState)
	const dispatch = useAppDispatch()

	const addTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(registerSlice.actions.setRegisterState({...state, [e.target.name]: e.target.value}))
	}

	const registerHendler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		try {
			e.preventDefault()
			await dispatch(asyncRegistrAction(name, surname, link, state.email, state.password, ))
		} catch (e) {
			console.log('Handler down')
		} 
	}
	const content = !isLoading 
	?
		<MyButton 
			className={btn.formButton}
			onClick={registerHendler}
			>Registration
		</MyButton>
	: 
		<h3>Loading</h3>

	return (

		<>
			<div className={classes.signUpPage}>
				<Form title="Sign Up">
					<Input
						name='name' 
						type="text" 
						placeholder="Name" 
						value={state.name}
						onChange={addTextHandler}
					/>
					<Input
						name='surname' 
						type="text" 
						placeholder="Surname"
						value={state.surname}
						onChange={addTextHandler}
					/>
					<Input
						name='email' 
						type="email" 
						placeholder="Email" 

						value={state.email}
						onChange={addTextHandler}
					/>
					<Input
						name='password' 
						type="password" 
						placeholder="Password" 

						value={state.password}
						onChange={addTextHandler}
					/>
					<Input
						name='link' 
						type="text" 
						placeholder="Link on avatar"
						value={state.link}
						onChange={addTextHandler}
					/>
					{content}
				</Form>
				{error ? <AlertBlock>{error}</AlertBlock> : null}
			</div>
		
		</>

	
	)
}

export default SignUpPage