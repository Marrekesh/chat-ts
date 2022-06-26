import { FC, useEffect, useState } from 'react'
import { db, auth } from '../../firebase/firebase'
import { collectionGroup, query, where, onSnapshot, collection, addDoc, orderBy } from 'firebase/firestore'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setUsers } from '../../store/reducers/UsersListSlice'
import { Iarray } from '../../store/reducers/UsersListSlice'
import { IChatUser } from '../../store/reducers/ChatUserSlice'
import { setChatUser, removeChatUser } from '../../store/reducers/ChatUserSlice'

import UserListItem from '../userListItem/UserListItem'

import c from './usersList.module.css'

const UsersList: FC = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector(state => state.usersSliceReduser.users)
	const chatUser = useAppSelector(state => state.chatUserSliceReducer.chatUser)
	const user1 = auth.currentUser?.uid

	const [msgs, setMsgs] = useState([])

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

	const selectUser = (user: IChatUser) => {
		dispatch(setChatUser({
			avatar: user.avatar,
			createdAt: {
				seconds: user.createdAt.seconds,
				nanoseconds: user.createdAt.nanoseconds
			}, 
			email: user.email,
			isOnline: user.isOnline,
			name: user.name,
			surname: user.surname,
			uid: user.uid
		}))

		const user2 = user.uid
		const id = user1! > user2 ? `${user1 + user2}` : `${user2 + user1}`;
		const msgRef = collection(db, 'messages', id, 'chat')
		const q = query(msgRef, orderBy('createdAt', 'asc'))

		onSnapshot(q, querySnapshot => {
			let msgs: any = []
			querySnapshot.forEach(doc => {
				msgs.push(doc.data())
			})
			setMsgs(msgs)
		})
	// dispatch(removeChatUser())
	}

	console.log(msgs)

	return (
		<div className={c.userList}>
			{users.map(item => {
				return <UserListItem key={item.uid} user={item} selectUser={selectUser}/>
			})}
			
		</div>
	)
}

export default UsersList