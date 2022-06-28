import { AppDispatch } from "../store"
import { useAppSelector } from '../../hooks/redux'
import { collectionGroup, query, where, onSnapshot,  collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'
import { useState } from 'react'
import { setText, setError } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { setImgUrl } from "../../store/reducers/MessagesSlice"

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
        // dispatch(setText(''))
		
		
    } catch (error: any) {
       dispatch(setError(error.message))
    } finally {
        dispatch(setError(''))
    }
}