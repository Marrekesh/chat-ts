import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {LoginState,  AuthState } from '../../types/stateTypes'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'


const initialState: AuthState = {
    loginState: {email: '', password: ''},
    isLoading: false,
    error:'',
    status: false

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
        setLoading(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.isLoading = action.payload
        },
        setError(state, action: PayloadAction<AuthUserDataString>) {
            state.error = action.payload
        },
        setStatus(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.status = action.payload
        },


    }
})

export default authSlice.reducer

export const {
    setLoginState,
    removeLoginState,
    setLoading,
    setError,
    setStatus
} = authSlice.actions;