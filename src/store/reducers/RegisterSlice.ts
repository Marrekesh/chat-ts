import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RegisterState, RegistrState } from '../../types/stateTypes'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'


const initialState: RegisterState = {
    registrState: {name: '', surname: '',  email: '', password: ''},
    status: false,
    isLoading: false,
    error:''

}

export const registerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRegisterState(state, action: PayloadAction<RegistrState>) {
            state.registrState.name = action.payload.name
            state.registrState.surname = action.payload.surname
            state.registrState.email = action.payload.email
            state.registrState.password = action.payload.password
        },
        removeRegisterState(state) {
            state.registrState = {name: '', surname: '', email: '', password: ''}
        },
        setLoading(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.isLoading = action.payload
        },
        setStatus(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.status = action.payload
        },
        setError(state, action: PayloadAction<AuthUserDataString>) {
            state.error = action.payload
        }

    }
})

export default registerSlice.reducer

export const {
    setRegisterState,
    removeRegisterState, 
    setStatus,
    setError,
    setLoading
} = registerSlice.actions;