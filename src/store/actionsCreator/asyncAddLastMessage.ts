import { FC, useEffect, useState } from 'react'
import c from './userListItem.module.css'
import { IChatUser } from '../../store/reducers/ChatUserSlice'
import { AppDispatch } from "../store"
import { useAppSelector } from '../../hooks/redux'
import { collectionGroup, query, where, onSnapshot,  collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'

import { setText, setError } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { setImgUrl, setLastMessage } from "../../store/reducers/MessagesSlice"



// export const asyncAddLastMessage = (id: string) => async (dispatch: AppDispatch) => {

//     try {
        
//         onSnapshot(doc(db, "lastMsg", id), (doc) => {
//                 const data = doc.data()
//                 dispatch(setLastMessage({
//                 createdAd: {
//                     seconds: data!.createdAt.seconds,
//                     nanoseconds: data!.createdAt.nanoseconds
//                 },
//                 from: data!.from,
//                 to: data!.to,
//                 text: data!.text,
//                 media: data!.media,
//                 unread: data!.unread

//             }))
            
//         });

    
//     } catch (error: any) {
//         console.log(error.message)
//     }
// }