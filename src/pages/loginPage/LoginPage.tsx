import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import classes from './loginPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { authSlice } from "../../store/reducers/AuthSlice"


const LoginPage = () => {

	// const {email, password} = useAppSelector(state => state.authStateReducer.loginState)
	// const dispatch = useAppDispatch()

	// dispatch(authSlice.actions.setLoginState(1))

	return (
		<div className={classes.loginPage}>
			<Form title="Login">
				<Input type="email" placeholder="Email"/>
				<Input type="password" placeholder="Password"/>
				<MyButton className={btn.formButton}>Login</MyButton>
			</Form>
		</div>
	
	)
}

export default LoginPage