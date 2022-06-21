import c from './userListItem.module.css'

const UserListItem = () => {

    return (

        <div className={c.userListItem}>
            <img className={c.image} src="https://katerynaupit.com/wp-content/uploads/2018/05/252A1774-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg" alt="photo" />
            <div className={c.textBlock}>
                <div className={c.textblockStatus}>
                    <div className={c.name}>Fikri Ruslandi</div>
                    <div className={c.status}>&bull;</div>
                </div>
            <div className={c.textblockMessge}>
                    <div className={c.message}>Ko, Kumaha Project anu eta Ko, Kumaha Project anu eta Ko, Kumaha Project anu eta</div>
                    <div className={c.time}>1 min</div>
                </div>
            </div>
        </div>
    )
}

export default UserListItem