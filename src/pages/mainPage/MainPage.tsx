import { Link } from 'react-router-dom'
import c from './mainPage.module.css'
import UsersBar from '../../components/usersBar/UsersBar'
import MessageWindow from '../../components/messageWindow/MessageWindow'


const MainPage = () => {
	return (
		<>
			<div className={c.mainPage}>
				<UsersBar/>
				<MessageWindow/>
			</div>
		</>

	)
}

export default MainPage