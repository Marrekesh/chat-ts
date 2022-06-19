import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar';
import Burger from '../../components/burger/Burger';
import AuthIdn from '../../components/authIdn/AuthIdn';

const MainPage = () => {
  return (
    <>
        <NavBar>
            <Burger/>
            <AuthIdn/>
        </NavBar>
        <div>
          Main page
        </div>
    </>

  )
}

export default MainPage