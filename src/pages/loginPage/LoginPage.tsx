import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import AlertBlock from "../../components/alert/AlertBlock"
import Spinner from "../../components/spinner/Spinner"

import { asyncLoginAction } from "../../store/actionsCreator/asyncLoginAction"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { authSlice, removeLoginState} from "../../store/reducers/AuthSlice"
import { FC, useEffect} from "react"
import { Link } from 'react-router-dom'
import { setUser } from "../../store/reducers/UserSlice"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { setStatus } from "../../store/reducers/AuthSlice"
import { useNavigate } from "react-router-dom";
import buttonClasses from '../../components/ui/button/myButton.module.css'
import { setLoading, setLoginState } from "../../store/reducers/AuthSlice"
import spinClas from '../../components/spinner/spinner.module.css'

import classes from './loginPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'
import inputClasses from '../../components/ui/input/input.module.css'

const LoginPage: FC = () => {
	const state = useAppSelector(state => state.authStateReducer.loginState)
	const {error} = useAppSelector(state => state.authStateReducer)
	const dispatch = useAppDispatch()
	const {isLoading} = useAppSelector(state => state.authStateReducer)

	const navigate = useNavigate()
	

	const addTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setLoginState({...state, [e.target.name]: e.target.value}))
	}

	const loginHendler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		try {
			e.preventDefault()
			dispatch(setLoading(true))
			await dispatch(asyncLoginAction(state.email, state.password))
			dispatch(removeLoginState())
			navigate('/main')
		} catch (e) {
			console.log('Handler down')
		} finally {
			dispatch(setLoading(false))
		}
	}

	const spinnerOrButton = isLoading ? <Spinner className={spinClas.spinner}/> 
											: 
											<MyButton 
												className={btn.formButton}
												onClick={loginHendler}
												>Login
											</MyButton>

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
						className={inputClasses.input}
					/>
					<Input
						name="password"  
						type="password" 
						placeholder="Password"
						value={state.password}
						onChange={addTextHandler}
						className={inputClasses.input}
					/>
					{spinnerOrButton}
				</Form>
				{error ? <AlertBlock>{error}</AlertBlock> : null}
			</div>
		</>
	) 
}

export default LoginPage