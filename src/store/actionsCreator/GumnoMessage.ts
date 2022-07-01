import { AppDispatch } from "../store"
import { useAppSelector } from '../../hooks/redux'
import { collectionGroup, query, where, onSnapshot,  collection, addDoc, Timestamp, setDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'
import { useState } from 'react'
import { setText, setError } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { setImgUrl } from "../../store/reducers/MessagesSlice"
import { IChatUser } from "../reducers/ChatUserSlice"
import { setChatUser } from "../reducers/ChatUserSlice"
import { TMessage } from "../../store/reducers/MessagesSlice"
import { setMessages } from "../../store/reducers/MessagesSlice"

export const GumnoMessage = (q: any, id: string, user1: string | undefined) => async (dispatch: AppDispatch) => {
    
	// const user2 = chatUser.uid
	// const id = user1! > user2 ? `${user1 + user2}` : `${user2 + user1}`;


	// const msgsRef =  collection(db, "messages", id, "chat");
	// const q = query(msgsRef, orderBy("createdAd", "asc"));
	



	// await(dispatch(GumnoMessage(q)))
		onSnapshot(q, (querySnapshot: any) => {
			
			let msgs: TMessage = [];
			querySnapshot.forEach((doc: any) => {
				const item = doc.data()
				// console.log(item)
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


	const docSnap: any = await getDoc(doc(db, "lastMsg", id));
	if (docSnap.data() && docSnap.data().from !== user1) {
	  await updateDoc(doc(db, "lastMsg", id), { unread: false });
	}

}