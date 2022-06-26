import { FC } from 'react'
import c from './userListItem.module.css'
import { IChatUser } from '../../store/reducers/ChatUserSlice'

interface UsersItemProps {
    user: IChatUser,
    selectUser: (user: IChatUser) => void
}

const UserListItem: FC<UsersItemProps> = ({user, selectUser}) => {
    
    const status = !user.isOnline ? <div className={c.status}>&bull;</div> : <div className={`${c.status} ${c.active}`}>&bull;</div>

    return (

        <div className={c.userListItem} onClick={() => selectUser(user)}>
            <div className={c.textBlock}>
                <img className={c.image} src={user.avatar || require('../../images/img-not-found.jpg')} alt="photo" />
                <div className={c.name}>{user.name}</div>
            </div>
            {status}
        </div>
    )
}

export default UserListItem