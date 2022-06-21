
import './App.css';
import AuthRoutes from '../../routes/AuthRoutes';
import NavBar from '../navbar/NavBar';

function App() {


	return (
			<div className="App">
				<NavBar/>
				<AuthRoutes/>
			</div>
	);
}

export default App