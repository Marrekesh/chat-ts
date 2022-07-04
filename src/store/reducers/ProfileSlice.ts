import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IProfileUser {
    avatar: string
    avatarPath?: string
    createdAt: {
        seconds: number, 
        nanoseconds: number
    }
    email: string
    isOnline: string
    name: string
    surname: string
    uid: string
}


interface IProfileState {
    user: IProfileUser,
    img: string
    imgProfileLoading: boolean
    isLoading: boolean,
    error: string
}


const initialState: IProfileState = {
    user: {name: '', surname: '', email: '', uid: '', isOnline: 'Offline', avatar: '', avatarPath: '', createdAt: {seconds: 0, nanoseconds: 0}},
    img: '',
    imgProfileLoading: false,
    isLoading: false,
    error: ''
}


const profileSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setProfileUser(state, action: PayloadAction<IProfileUser>) {
            state.user.avatar = action.payload.avatar
            state.user.avatarPath = action.payload.avatarPath
            state.user.createdAt.seconds = action.payload.createdAt.seconds
            state.user.createdAt.nanoseconds = action.payload.createdAt.nanoseconds
            state.user.name = action.payload.name
            state.user.surname = action.payload.surname
            state.user.email = action.payload.email
            state.user.uid = action.payload.uid
            state.user.isOnline = action.payload.isOnline
        },
        setImgProfileUrl(state, action: PayloadAction<string>) {
            state.img = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setImgProfileLoading(state, action: PayloadAction<boolean>) {
            state.imgProfileLoading = action.payload
        },
    }
})

export const {setError, setLoading, setImgProfileUrl, setImgProfileLoading, setProfileUser} = profileSlice.actions;

export default profileSlice.reducer