import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {LoginState} from '../../models/IUser'

interface AuthState {
    loginState: LoginState,
    isLoading?: boolean,
    error?: string
}

const initialState: AuthState = {
    loginState: {email: '', password: ''},
    isLoading: false,
    error:''

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginState(state, action: PayloadAction<LoginState>) {
            state.loginState.email = action.payload.email
            state.loginState.password = action.payload.password
        },

        removeLoginState(state) {
            state.loginState = {email: '', password: ''}
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }

    }
})

export default authSlice.reducer

export const {
    setLoginState,
    removeLoginState,
    setLoading,
    setError
} = authSlice.actions;