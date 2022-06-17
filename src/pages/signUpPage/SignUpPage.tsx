

import Form from "../../components/ui/form/Form"
import Input from "../../components/ui/input/Input"
import MyButton from "../../components/ui/button/MyButton"
import classes from './signUpPage.module.css'
import btn from '../../components/ui/button/myButton.module.css'

const SignUpPage = () => {
	return (
		<div className={classes.loginPage}>
			<Form title="Sign Up">
				<Input type="text" placeholder="Name" required/>
				<Input type="text" placeholder="Surname"/>
				<Input type="email" placeholder="Email" required/>
				<Input type="password" placeholder="Password" required/>
				<Input type="text" placeholder="Link on avatar"/>
				<MyButton className={btn.formButton}>Registration</MyButton>
			</Form>
		</div>
	
	)
}

export default SignUpPage