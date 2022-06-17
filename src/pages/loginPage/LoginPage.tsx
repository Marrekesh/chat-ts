import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import classes from './loginPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'

const LoginPage = () => {
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