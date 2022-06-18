import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IUser} from '../../models/IUser'

interface UserState {
    id: string,
    email: string | null
    isLoading?: boolean,
    error?: string
}

const initialState: UserState = {
    id: '',
    email: '',
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.id = action.payload.id
            state.email = action.payload.email
            state.isLoading = false
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
    }
})
export const {setUser, setLoading} = userSlice.actions;

export default userSlice.reducer