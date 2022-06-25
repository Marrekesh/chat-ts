import { FC, useEffect, useState } from 'react'
import { db, auth } from '../../firebase/firebase'
import { collectionGroup, query, where, onSnapshot, collection } from 'firebase/firestore'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setUsers } from '../../store/reducers/UsersListSlice'
import { Iarray } from '../../store/reducers/UsersListSlice'

import UserListItem from '../userListItem/UserListItem'

import c from './usersList.module.css'

const UsersList: FC = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector(state => state.usersSliceReduser.users)


	// const [users, setUsers] = useState([])
	useEffect(() => {
		const usersRef = collection(db, 'users')
		//create query object
		const q = query(usersRef, where('uid', 'not-in', [auth.currentUser?.uid]))
		//execute query

		const unsub = onSnapshot (q, querySnapshot => {
			let users: Iarray = []
			querySnapshot.forEach(doc =>  {
				const item = doc.data()
				users.push({
						avatar: item.avatar,
						avatarPath: item.avatarPath,
						createdAt: {
							seconds: item.createdAt.seconds,
							nanoseconds: item.createdAt.nanoseconds
						}, 
						email: item.email,
						isOnline: item.isOnline,
						name: item.name,
						surname: item.surname,
						uid: item.uid
				})
			})
			dispatch(setUsers(users))
		 
		})
		return () => unsub()
	},[])

	
  return (
	<div className={c.userList}>
		{users.map(item => {
				return <UserListItem key={item.uid} user={item}/>
		})}
		
	</div>
  )
}

export default UsersList