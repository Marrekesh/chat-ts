import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {} from '../../types/stateTypes'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'

interface IMainState {
    mainUser: null,
    error: string,
    loading: boolean
}

const initialState: IMainState = {
    mainUser: null,
    error: '',
    loading: false
}

export const mainUserSlice = createSlice({
    name: 'mainUser',
    initialState,
    reducers: {
        setMainUser(state, action: PayloadAction<any>) {
            state.mainUser = action.payload
        },
        setMainUserError(state, action: PayloadAction<AuthUserDataString>) {
            state.error = action.payload
        },
        setMainUserLoading(state, action: PayloadAction<AuthUserDataBoolean>) {
            state.loading = action.payload
        }
    }
})
export const {setMainUser, setMainUserError, setMainUserLoading} = mainUserSlice.actions;

export default mainUserSlice.reducer