import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'

interface ILoginUser {
    email: string | null,
    id: string
}
export interface IUser {
    name: string,
    surname: string,
    email: string | null,
    id: string,
    isOnline: string,
    avatar?: string,
    avatarPath?: string
}

interface IUSerState {
    user: IUser,
    loginUser: ILoginUser
    isLoading: boolean,
    error: string
}

const initialState: IUSerState = {
    user: {name: '', surname: '', email: '', id: '', isOnline: 'offline', avatar: ''},
    loginUser: {email: '', id: ''},
    isLoading: false,
    error: ''
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user.name = action.payload.name
            state.user.surname = action.payload.surname
            state.user.email = action.payload.email
            state.user.id = action.payload.id
            state.user.isOnline = action.payload.isOnline
            state.user.avatar = action.payload.avatar
        },
        setLoginUser(state, action: PayloadAction<ILoginUser>) {
            state.loginUser.email = action.payload.email
            state.loginUser.id = action.payload.id
        },
        setLoading(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.isLoading = action.payload
        },
        removeUser(state) {
            state.user.name = ''
            state.user.surname = ''
            state.user.email = ''
            state.user.id = ''
            state.user.isOnline = 'Offline'
        },
        removeLoginUser(state) {
            state.loginUser.email = ''
            state.loginUser.id = ''
        },
        setError(state, action: PayloadAction<AuthUserDataString>) {
            state.error = action.payload
        }
    }
})
export const {setUser, setLoading, removeUser, setLoginUser, removeLoginUser} = userSlice.actions;

export default userSlice.reducer