import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {LoginState, RegistrState} from '../../models/IUser'

interface AuthState {
    loginState: LoginState,
    registrState: RegistrState
}

const initialState: AuthState = {
    loginState: {email: '', password: ''},
    registrState: {name: '', surname: '', link: '', email: '', password: ''},

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
        setRegisterState(state, action: PayloadAction<RegistrState>) {
            state.registrState.name = action.payload.name
            state.registrState.surname = action.payload.surname
            state.registrState.link = action.payload.link
            state.registrState.email = action.payload.email
            state.registrState.password = action.payload.password
        },
        removeRegisterState(state) {
            state.registrState = {name: '', surname: '', link: '', email: '', password: ''}
        }

    }
})

export default authSlice.reducer

export const {setLoginState, removeLoginState, setRegisterState, removeRegisterState} = authSlice.actions;