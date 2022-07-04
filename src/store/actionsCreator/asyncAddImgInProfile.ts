import { AppDispatch } from "../store"
import {  updateDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { db, auth, storage } from '../../firebase/firebase'

import { setImgProfileUrl, setError, setImgProfileLoading } from "../reducers/ProfileSlice"

//Спросить как типизировать файли
export const asyncAddImgInProfile = (img: any, user: any) => async (dispatch: AppDispatch) => {
    dispatch(setImgProfileLoading(true))
    const imgRef = ref(storage, `avatar/${new Date().getTime()} - ${img.name}`)
    try {
        if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
        }
        const snap = await uploadBytes(imgRef, img)
        const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
        
        await updateDoc(doc(db, 'users', auth.currentUser!.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath
        })
        dispatch(setImgProfileUrl(url))
    } catch(e: any) {
        dispatch(setError(e.message))
    } finally {
        dispatch(setError(''))
        dispatch(setImgProfileLoading(false))
    }

}	
