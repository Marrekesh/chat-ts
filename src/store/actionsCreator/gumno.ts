import { AppDispatch } from "../store"
import { useAppSelector } from '../../hooks/redux'
import { collectionGroup, query, where, onSnapshot,  collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'
import { useState } from 'react'
import { setText, setError } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { setImgUrl } from "../../store/reducers/MessagesSlice"
import { IChatUser } from "../reducers/ChatUserSlice"
import { setChatUser } from "../reducers/ChatUserSlice"

export const gumno = (user: IChatUser) => async (dispatch: AppDispatch) => {

    
    await dispatch(setChatUser({
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

}