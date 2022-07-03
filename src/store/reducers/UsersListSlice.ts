import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/stateTypes'
import { AuthUserDataString, AuthUserDataBoolean } from '../../types/actionsTypes'

interface Icreated {
    seconds: number,
    nanoseconds: number
}

interface Iusers {
    avatar?: string,
    avatarPath?: string,
    createdAt: Icreated,
    email: string,
    isOnline: string,
    name: string,
    surname: string,
    uid: string
}

interface IUsersFilter {
    term: string
}

export type Iarray = Array<Iusers>

interface IusersState {
    users: Iarray,
    filter: IUsersFilter,
    isLoading: boolean,
    error: string
}

const initialState: IusersState = {
    users: [],
    filter: {term: ''},
    isLoading: false,
    error: ''
}



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<Iarray>) {
                state.users = action.payload
                // state.users.push({
                //     avatar: action.payload.avatar,
                //     avatarPath: action.payload.avatarPath,
                //     createdAt: {
                //         seconds: action.payload.createdAt.seconds,
                //         nanoseconds: action.payload.createdAt.nanoseconds
                //     }, 
                //     email: action.payload.email,
                //     isOnline: action.payload.isOnline,
                //     name: action.payload.name,
                //     surname: action.payload.surname,
                //     uid: action.payload.uid
                // })
            
        },
        filterUser(state, action:PayloadAction<string>) {
            state.filter.term = action.payload
        }   
    }
})
export const {setUsers, filterUser} = userSlice.actions;

export default userSlice.reducer