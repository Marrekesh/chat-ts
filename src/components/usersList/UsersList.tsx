import UserListItem from '../userListItem/UserListItem'

import c from './usersList.module.css'

const UsersList = () => {

  return (
    <div className={c.userList}>
        <UserListItem/>
        <UserListItem/>
        <UserListItem/>
    </div>
  )
}

export default UsersList