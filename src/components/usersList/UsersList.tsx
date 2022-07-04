import { FC, useEffect } from 'react'
import { db, auth } from '../../firebase/firebase'
import { query, where, onSnapshot, collection, getDoc, updateDoc,doc, orderBy } from 'firebase/firestore'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setUsers } from '../../store/reducers/UsersListSlice'
import { Iarray } from '../../store/reducers/UsersListSlice'
import { IChatUser } from '../../store/reducers/ChatUserSlice'
import { setChatUser } from '../../store/reducers/ChatUserSlice'
import { setMessages } from '../../store/reducers/MessagesSlice'
import { TMessage } from '../../store/reducers/MessagesSlice'
import UserListItem from '../userListItem/UserListItem'
import { useFilterUsers } from '../../hooks/useFilter'

import c from './usersList.module.css'

const UsersList: FC = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector(state => state.usersSliceReduser.users)
	const messages = useAppSelector(state => state.messageReducer.messages)
	const chatUser = useAppSelector(state => state.chatUserSliceReducer.chatUser)
	const user1 = auth.currentUser?.uid
	const term = useAppSelector(state => state.usersSliceReduser.filter.term)

	const filteredUsers = useFilterUsers(users, term)


	useEffect(() => {
		const usersRef = collection(db, 'users')
		const q = query(usersRef, where('uid', 'not-in', [auth.currentUser?.uid]))

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


	useEffect(() => {

		const user2 = chatUser.uid
		const id = user1! > user2 ? `${user1 + user2}` : `${user2 + user1}`;
	
		const msgsRef =  collection(db, "messages", id, "chat");
		const q = query(msgsRef, orderBy("createdAd", "asc"));

		const unsub = onSnapshot(q, (querySnapshot) => {
		
			let msgs: TMessage = [];
			querySnapshot.forEach((doc) => {
				const item = doc.data()
				msgs.push({
					createdAd: {
						seconds: item.createdAd.seconds,
						nanoseconds: item.createdAd.nanoseconds
					}, 
					from: item.from,
					media: item.media,
					text: item.text,
					to: item.to
				});
			});
	
			dispatch(setMessages(msgs))
		});

		return () => unsub()

	}, [chatUser])


	const selectUser = async (user: IChatUser) => {
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

		const user2 = chatUser.uid
		const id = user1! > user2 ? `${user1 + user2}` : `${user2 + user1}`;

		const docSnap: any = await getDoc(doc(db, "lastMsg", id));
		if (docSnap.data() && docSnap.data().from !== user1) {
		  await updateDoc(doc(db, "lastMsg", id), { unread: false });
		}
	}

	return (
		<div className={c.userList}>
			{filteredUsers.map(item => {
				return <UserListItem key={item.uid} user={item} user1={user1} selectUser={selectUser}/>
			})}
		</div>
	)
}

export default UsersList