import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/stateTypes'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'


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
        },
        setLoading(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.isLoading = action.payload
        },
        removeUser(state) {
            state.id = ''
            state.email = ''
        },
        setError(state, action: PayloadAction<AuthUserDataString>) {
            state.error = action.payload
        }
    }
})
export const {setUser, setLoading, removeUser} = userSlice.actions;

export default userSlice.reducer