import c from './usersBar.module.css'
import UsersList from '../usersList/UsersList'

const UsersBar = () => {
  return (
    <div className={c.usersBar}>
        <div className={c.headerUserBar}>
            <h3 className={c.headerUserBarTitle}>Users</h3>
        </div>
        <UsersList/>
    </div>
  )
}

export default UsersBar