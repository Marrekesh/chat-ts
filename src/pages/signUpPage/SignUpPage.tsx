import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import classes from './signUpPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { registerSlice, removeRegisterState, setStatus} from "../../store/reducers/RegisterSlice"
import React, { FC } from "react"
import { asyncRegistrAction } from "../../store/actionsCreator/asyncRegistration"
import ErrorBlock from "../../components/error/ErrorBlock"

import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar';

import buttonClasses from '../../components/ui/button/myButton.module.css'

const SignUpPage: FC = () => {
	const loading = useAppSelector(state => state.registerStateReducer.isLoading)
	const state = useAppSelector(state => state.registerStateReducer.registrState)
	const error = useAppSelector(state => state.registerStateReducer.error)
	const dispatch = useAppDispatch()
	// const navigate = useNavigate()


	const addTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(registerSlice.actions.setRegisterState({...state, [e.target.name]: e.target.value}))
	}

	const registerHendler = async (e: any) => {
		try {
			e.preventDefault()
			await dispatch(asyncRegistrAction(state.email, state.password))
			dispatch(removeRegisterState())
			// navigate("/")
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

		<>
			<NavBar>
				<Link to="/login">
					<MyButton className={buttonClasses.btn}>Login</MyButton>
				</Link>
			</NavBar>
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
				{error ? <ErrorBlock>{error}</ErrorBlock> : null}
			</div>
		
		</>

	
	)
}

export default SignUpPage