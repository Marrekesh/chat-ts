import { AppDispatch } from "../store"
import { useAppSelector } from '../../hooks/redux'
import { collectionGroup, query, where, onSnapshot,  collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'
import { useState } from 'react'
import { setText } from '../../store/reducers/MessagesSlice'
import { useAppDispatch } from '../../hooks/redux'
import { setImgUrl, setImgLoading } from "../../store/reducers/MessagesSlice"


//Спросить как типизировать файли
export const asyncGetImgInMessageAction = (img: any) => async (dispatch: AppDispatch) => {

    try {
        // let url;
        dispatch(setImgLoading(true))
        if (img) {
            const imgRef = ref(storage, `images/${new Date().getTime()} - ${img.name}`)
            const snap = await uploadBytes(imgRef, img)
            const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath))
            // url = dlUrl
            dispatch(setImgUrl(dlUrl))
        }
         
    } catch (error: any) {
        console.log(error.message)
    } finally {
        dispatch(setImgLoading(false))
    }
}