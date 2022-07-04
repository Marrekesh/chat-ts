
import Camera from '../../components/svg/camera/Camera'
import DeleteImg from '../../components/svg/delete/DeleteImg'
import { FC } from 'react'
import { useEffect } from 'react'
import {  db, auth } from '../../firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setImgProfileUrl, setProfileUser } from '../../store/reducers/ProfileSlice'
import { asyncAddImgInProfile } from '../../store/actionsCreator/asyncAddImgInProfile'
import { asyncDeleteProfileUser } from '../../store/actionsCreator/asyncDeleteProfileUser'
import Spinner from '../../components/spinner/Spinner'
import spinCss from '../../components/spinner/spinner.module.css'
import c from './profilePage.module.css'

const Profile: FC = () => {
	const {img, user} = useAppSelector(state => state.profileReducer)
	const imgProfileLoading = useAppSelector(state => state.profileReducer.imgProfileLoading)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()
	//In rules of fitestom for loading img
	useEffect(() => {
		getDoc(doc(db, 'users', auth.currentUser!.uid)).then((docSnap) => {
			if (docSnap.exists()) {
				const data = docSnap.data()
				dispatch(setProfileUser({
					name: data.name,
					surname: data.surname,
					uid: data.uid,
					email: data.email,
					isOnline: data.isOnline,
					avatar: data.avatar,
					avatarPath: data.avatarPath,
					createdAt: {
						seconds: data.createdAt.seconds,
						nanoseconds: data.createdAt.nanoseconds
					}
				}))
			}
		})
		dispatch(setImgProfileUrl(img))
	}, [img])

	const deleteImage = async () => {
		await dispatch(asyncDeleteProfileUser(user))
	};

	const imgChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files !== null) {
			dispatch(setImgProfileUrl(e.target.files[0].name))
			await dispatch(asyncAddImgInProfile(e.target.files[0], user))
		}
	} 

	return user ?(
		<section className={c.profile}>
			<div className={c.profileContainer}>
				<div className={c.imgContainer}>
					{imgProfileLoading 
					?
					<Spinner className={spinCss.spinner}/>
					: 
					<img src={user.avatar || require('../../images/img-not-found.jpg')} alt="avatar" />
					}
					<div className={c.overlay}>
						<div>
							<label htmlFor="photo">
								<Camera/>
							</label>
							{user.avatar ? <DeleteImg deleteImage={deleteImage}/> : null}
							<input type="file" accept='image/*' className={c.photoInput} id='photo' onChange={imgChangeHandler}/>
						</div>
					</div>
				</div>
				<div className={c.textContainer}>
					<h3>{user.name}</h3>
					<p>{user.email}</p>
					<hr />
				</div>
			</div>
		</section>
	) : null
}

export default Profile