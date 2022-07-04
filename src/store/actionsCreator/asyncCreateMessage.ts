import { AppDispatch } from "../store"
import { collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore'

import { db } from '../../firebase/firebase'

import {  setError } from '../../store/reducers/MessagesSlice'


export const asyncCreateMessage = (text: string, user1: string | undefined, user2: string, url: string, id: string) => async (dispatch: AppDispatch) => {

    try {  
        await addDoc(collection(db, 'messages', id, 'chat'), {
            text,
            from: user1,
            to: user2,
            createdAd: Timestamp.fromDate(new Date()),
            media: url || ''
        })

        await setDoc(doc(db, "lastMsg", id), {
            text,
            from: user1,
            to: user2,
            createdAt: Timestamp.fromDate(new Date()),
            media: url || "",
            unread: true,
        });
    } catch (error: any) {
       dispatch(setError(error.message))
    } finally {
        dispatch(setError(''))
    }
}