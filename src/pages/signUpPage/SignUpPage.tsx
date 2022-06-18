import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import classes from './signUpPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { authSlice, removeRegisterState} from "../../store/reducers/AuthSlice"
import React, { FC } from "react"
import { asyncRegistrAction } from "../../store/actionsCreator/asyncRegistration"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {setUser} from "../../store/reducers/UserSlice"
import { useNavigate } from "react-router-dom"
const SignUpPage: FC = () => {
	const loading = useAppSelector(state => state.userReducer.isLoading)
	const state = useAppSelector(state => state.authStateReducer.registrState)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const addTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(authSlice.actions.setRegisterState({...state, [e.target.name]: e.target.value}))
	}


	const registerHendler = async (e: any) => {
		try {
			
			e.preventDefault()
			await dispatch(asyncRegistrAction(state.email, state.password))
			dispatch(removeRegisterState())
			navigate("/")
		} catch (e) {
			console.log('Handler down')
		} 
	}

	const content = !loading 
	?
		<MyButton 
			className={btn.formButton}
			onClick={registerHendler}
			>Registration
		</MyButton>
	: 
		<h3>Loading</h3>

	return (
		<div className={classes.loginPage}>
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
				{/* <MyButton 
					className={btn.formButton}
					onClick={registerHendler}
					>Registration
				</MyButton> */}
				{content}
			</Form>
		</div>
	
	)
}

export default SignUpPage