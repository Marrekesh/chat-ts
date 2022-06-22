import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import AlertBlock from "../../components/alert/AlertBlock"
import Loader from "../../components/loader/Loader"

import { asyncLoginAction } from "../../store/actionsCreator/asyncLoginAction"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { authSlice, removeLoginState} from "../../store/reducers/AuthSlice"
import { FC, useEffect} from "react"
import { Link } from 'react-router-dom'
import { setUser } from "../../store/reducers/UserSlice"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { setStatus } from "../../store/reducers/AuthSlice"

import buttonClasses from '../../components/ui/button/myButton.module.css'
import classes from './loginPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'


const LoginPage: FC = () => {
	const state = useAppSelector(state => state.authStateReducer.loginState)
	const {error} = useAppSelector(state => state.authStateReducer)
	const dispatch = useAppDispatch()
	const {isLoading} = useAppSelector(state => state.userReducer)
	const status = useAppSelector(state => state.authStateReducer.status)
	
	
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('userData') || "{}")
		// if (data && data.email) {
			dispatch(setUser({
				id: data.id,
				email: data.email
			}))
		// }
		onAuthStateChanged(auth, (user) => {
			// console.log(user?.uid)
			// console.log(user?.email)
			// if(data.id === user!.uid) {
			// 	dispatch(setUser({
			// 		id: data.id,
			// 		email: data.email
			// 	}))
			// }

			dispatch(setUser({
				id: user!.uid,
				email: user!.email
			}))
			// dispatch(setStatus(true))
		})
	}, [])

	// if (status) {
	// 	return <Loader/>
	// }

	const addTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(authSlice.actions.setLoginState({...state, [e.target.name]: e.target.value}))
	}

	const loginHendler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		try {
			e.preventDefault()
			await dispatch(asyncLoginAction(state.email, state.password))
			dispatch(removeLoginState())
		} catch (e) {
			console.log('Handler down')
		} 
	}

	return  (
		<>
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
					<Link to="/registration"><MyButton className={`${buttonClasses.formButton} ${buttonClasses.signUp}`}>Sign Up</MyButton></Link>
				</Form>
				{error ? <AlertBlock>{error}</AlertBlock> : null}
			</div>
		</>
	) 
}

export default LoginPage