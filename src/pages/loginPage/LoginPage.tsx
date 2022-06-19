import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import classes from './loginPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'
import { asyncLoginAction } from "../../store/actionsCreator/asyncLoginAction"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { authSlice, removeLoginState, setError } from "../../store/reducers/AuthSlice"
import { FC } from "react"
import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar';
import ErrorBlock from "../../components/error/ErrorBlock"
import { useEffect } from "react"

import buttonClasses from '../../components/ui/button/myButton.module.css'
import { setUser } from "../../store/reducers/UserSlice"

const LoginPage: FC = () => {
	const state = useAppSelector(state => state.authStateReducer.loginState)
	const error = useAppSelector(state => state.authStateReducer.error)
	const {email, id} = useAppSelector(state => state.userReducer)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('userData') || "{}")
		if (data && data.email) {
			dispatch(setUser({
				id: data.id,
				email: data.email
			}))
		}
	}, [])

	const addTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(authSlice.actions.setLoginState({...state, [e.target.name]: e.target.value}))
	}

	const loginHendler = async (e: any) => {
		try {
			e.preventDefault()
			await dispatch(asyncLoginAction(state.email, state.password))
			dispatch(removeLoginState())
		} catch (e) {
			console.log('Handler down')
		} 
	}

	return (
		<>
			<NavBar>
				<Link to="/registration">
					<MyButton className={buttonClasses.btn}>Sign Up</MyButton>
				</Link>
			</NavBar>
			<div className={classes.loginPage}>
				<Form title="Login">
					<Input
						name="email" 
						type="email" 
						placeholder="Email"
						value={state.email}
						onChange={addTextHandler}
					/>
					<Input
						name="password"  
						type="password" 
						placeholder="Password"
						value={state.password}
						onChange={addTextHandler}
					/>
					<MyButton 
						className={btn.formButton}
						onClick={loginHendler}
						>Login
					</MyButton>
				</Form>
				{error ? <ErrorBlock>{error}</ErrorBlock> : null}
				
			</div>
			
		</>

	
	)
}

export default LoginPage