
import './App.css';
import AuthRoutes from '../../routes/AuthRoutes';
import NavBar from '../navbar/NavBar';
import Loader from '../loader/Loader';

function App() {


	return (
			<div className="App">
				<NavBar/>
				<AuthRoutes/>
				{/* <Loader/> */}
			</div>
	);
}

export default App