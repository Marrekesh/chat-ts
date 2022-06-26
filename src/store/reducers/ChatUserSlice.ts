import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/stateTypes'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'

interface Icreated {
    seconds: number,
    nanoseconds: number
}

export interface IChatUser {
    avatar?: string,
    createdAt: Icreated,
    email: string,
    isOnline: boolean,
    name: string,
    surname: string,
    uid: string
}


interface IchatUserState {
    chatUser: IChatUser,
    isLoading: boolean,
    error: string
}

const initialState: IchatUserState = {
    chatUser: {    
        avatar: '',
        createdAt: {
            seconds: 0,
            nanoseconds: 0
        },
        email: '',
        isOnline: false,
        name: '',
        surname: '',
        uid: ''
    },
    isLoading: false,
    error: ''
}

export const chatUserSlice = createSlice({
    name: 'chatUser',
    initialState,
    reducers: {
        setChatUser(state, action: PayloadAction<IChatUser>) {
            state.chatUser.name = action.payload.name
            state.chatUser.surname = action.payload.surname
            state.chatUser.email = action.payload.email
            state.chatUser.createdAt.nanoseconds = action.payload.createdAt.nanoseconds
            state.chatUser.createdAt.seconds = action.payload.createdAt.seconds
            state.chatUser.uid = action.payload.uid
            state.chatUser.isOnline = action.payload.isOnline
            state.chatUser.avatar = action.payload.avatar
        },
        setLoading(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.isLoading = action.payload
        },
        removeChatUser(state) {
            state.chatUser.name = ''
            state.chatUser.surname = ''
            state.chatUser.email = ''
            state.chatUser.createdAt.nanoseconds = 0
            state.chatUser.createdAt.seconds = 0
            state.chatUser.uid = ''
            state.chatUser.isOnline = false
            state.chatUser.avatar = ''
        },
        setError(state, action: PayloadAction<AuthUserDataString>) {
            state.error = action.payload
        }
    }
})
export const {setChatUser, setLoading, removeChatUser} = chatUserSlice.actions;

export default chatUserSlice.reducer