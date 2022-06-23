

import AuthRoutes from '../../routes/AuthRoutes';
import NavBar from '../navbar/NavBar';
import {BrowserRouter as Router} from "react-router-dom";

import WrapperComponent from '../wrapperComponent/WrapperComponent';
import './App.css';
import 'typeface-lato'
function App() {

	return (

		<WrapperComponent>
			<Router>
				<NavBar/>
				<AuthRoutes/>
			</Router>
		</WrapperComponent>	

	);
}

export default App