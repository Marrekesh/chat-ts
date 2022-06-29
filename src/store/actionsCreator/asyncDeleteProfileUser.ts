import Camera from '../../components/svg/camera/Camera'
import DeleteImg from '../../components/svg/delete/DeleteImg'
import { FC, useState } from 'react'
import { useEffect } from 'react'
import { storage, db, auth } from '../../firebase/firebase'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { asyncAddImgInProfile } from '../../store/actionsCreator/asyncAddImgInProfile'
import { AppDispatch } from "../store"
import { IProfileUser, setError, setImgProfileUrl, setProfileUser  } from '../../store/reducers/ProfileSlice'


export const asyncDeleteProfileUser = (user: IProfileUser) => async (dispatch: AppDispatch) => {

    try {
        const confirm = window.confirm("Delete avatar?");
        // const navigate = useNavigate()
        if (confirm) {
              await deleteObject(ref(storage, user.avatarPath));
              await updateDoc(doc(db, "users", auth.currentUser!.uid), {
                  avatar: "",
                  avatarPath: "",
              });
            //   navigate('/')
        }
        dispatch(setImgProfileUrl(''))
      } catch (err: any) {
        dispatch(setError(err.message))
        dispatch(setError(''))
      }

}	