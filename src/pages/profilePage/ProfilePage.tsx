// const Img = require('../../images/avatar.jpg')
import Camera from '../../components/svg/camera/Camera'
import DeleteImg from '../../components/svg/delete/DeleteImg'
import { FC, useState } from 'react'
import { useEffect } from 'react'
import { storage, db, auth } from '../../firebase/firebase'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";

import c from './profilePage.module.css'

const Profile: FC = () => {
	const [img, setImg] = useState<any>('')
	const [user, setUser] = useState<any>()
	const navigate = useNavigate()
	//In rules of fitestom for loading img

	// service firebase.storage {
	// 	match /b/{bucket}/o {
	// 	  match /{allPaths=**} {
	// 		allow read, write: if request.auth != null;
	// 	  }
	// 	}
	//   }

	useEffect(() => {
		getDoc(doc(db, 'users', auth.currentUser!.uid)).then((docSnap) => {
			if (docSnap.exists()) {
				console.log(docSnap.data())
				setUser(docSnap.data())
			}
		})
		if (img) {
			const uploadImg = async () => {
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
					setImg('')
				} catch(e: any) {
					console.log(e.message)
				}

			}	
			uploadImg()
		}
	}, [img])

	const deleteImage = async () => {
		try {
		  const confirm = window.confirm("Delete avatar?");
		  if (confirm) {
				await deleteObject(ref(storage, user.avatarPath));
		
				await updateDoc(doc(db, "users", auth.currentUser!.uid), {
				avatar: "",
				avatarPath: "",
				});
				navigate('/')
		  }
		} catch (err: any) {
		  console.log(err.message);
		}
	};

	const imgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files !== null) {
			setImg(e.target.files[0])
		}
	} 


	return user ?(
		<section className={c.profile}>
			<div className={c.profileContainer}>
				<div className={c.imgContainer}>
					<img src={user.avatar || require('../../images/img-not-found.jpg')} alt="avatar" />
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
					<small>Joined on {user.createdAt.toDate().toDateString()}</small>
				</div>
			</div>
		</section>
	) : null
}

export default Profile