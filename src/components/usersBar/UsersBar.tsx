import c from './usersBar.module.css'
import MyButton from '../ui/button/MyButton'
import btnClassses from '../ui/button/myButton.module.css'
import UsersList from '../usersList/UsersList'

const UsersBar = () => {
  return (
    <div className={c.usersBar}>
        <div className={c.headerUserBar}>
            <h3 className={c.headerUserBarTitle}>Users</h3>
            {/* <MyButton className={btnClassses.btn}>NEW</MyButton> */}
        </div>
        {/* <hr className={c.barLine}/> */}
        <UsersList/>
    </div>
  )
}

export default UsersBar