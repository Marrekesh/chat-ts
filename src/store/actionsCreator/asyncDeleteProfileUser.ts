
import { storage, db, auth } from '../../firebase/firebase'
import { ref, deleteObject } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { AppDispatch } from "../store"
import { IProfileUser, setError, setImgProfileUrl } from '../../store/reducers/ProfileSlice'


export const asyncDeleteProfileUser = (user: IProfileUser) => async (dispatch: AppDispatch) => {

  try {
      const confirm = window.confirm("Delete avatar?");
      if (confirm) {
            await deleteObject(ref(storage, user.avatarPath));
            await updateDoc(doc(db, "users", auth.currentUser!.uid), {
                avatar: "",
                avatarPath: "",
            });
      }
      dispatch(setImgProfileUrl(''))
    } catch (err: any) {
      dispatch(setError(err.message))
      dispatch(setError(''))
    }
}	