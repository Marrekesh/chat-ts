import { AppDispatch } from "../store"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../firebase/firebase'
import { setImgUrl, setImgLoading } from "../reducers/MessagesSlice"
import { setImgName } from "../reducers/MessagesSlice"

//Спросить как типизировать файли
export const asyncGetImgInMessageAction = (img: any) => async (dispatch: AppDispatch) => {

    try {
        // let url;
        dispatch(setImgLoading(true))
        if (img) {
            dispatch(setImgName(img.name))
            const imgRef = ref(storage, `images/${new Date().getTime()} - ${img.name}`)
            const snap = await uploadBytes(imgRef, img)
            const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath))
            dispatch(setImgUrl(dlUrl))
        }
         
    } catch (error: any) {
        console.log(error.message)
    } finally {
        dispatch(setImgLoading(false))
    }
}