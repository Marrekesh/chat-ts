import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RegistrState} from '../../models/IUser'

type IStatus = boolean

interface RegisterState {
    registrState: RegistrState,
    status: IStatus
    isLoading?: boolean,
    error?: string
}

const initialState: RegisterState = {
    registrState: {name: '', surname: '', link: '', email: '', password: ''},
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
            state.registrState.link = action.payload.link
            state.registrState.email = action.payload.email
            state.registrState.password = action.payload.password
        },
        removeRegisterState(state) {
            state.registrState = {name: '', surname: '', link: '', email: '', password: ''}
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setStatus(state, action: PayloadAction<IStatus>) {
            state.status = action.payload
        },
        setError(state, action) {
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