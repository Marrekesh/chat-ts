import { FC } from 'react'
import c from './userListItem.module.css'


interface UsersItemProps {
    user: any
}

const UserListItem: FC<UsersItemProps> = ({user}) => {
    
    const status = !user.isOnline ? <div className={c.status}>&bull;</div> : <div className={`${c.status} ${c.active}`}>&bull;</div>

    return (

        <div className={c.userListItem}>
            <div className={c.textBlock}>
                <img className={c.image} src={user.avatar || require('../../images/img-not-found.jpg')} alt="photo" />
                <div className={c.name}>{user.name}</div>
            </div>
            {status}
        </div>
    )
}

export default UserListItem