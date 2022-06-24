import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/stateTypes'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'

export interface IUser {
    name: string,
    surname: string,
    email: string | null,
    id: string,
    isOnline: boolean
}

interface IUSerState {
    user: IUser,
    isLoading: boolean,
    error: string
}

const initialState: IUSerState = {
    user: {name: '', surname: '', email: '', id: '', isOnline: false},
    isLoading: false,
    error: ''
}


// const initialState: any = {
//     id: '',
//     email: '',
//     isLoading: false,
//     error: ''
// }

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
        },
        setLoading(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.isLoading = action.payload
        },
        removeUser(state) {
            state.user.name = ''
            state.user.surname = ''
            state.user.email = ''
            state.user.id = ''
            state.user.isOnline = false
        },
        setError(state, action: PayloadAction<AuthUserDataString>) {
            state.error = action.payload
        }
    }
})
export const {setUser, setLoading, removeUser} = userSlice.actions;

export default userSlice.reducer