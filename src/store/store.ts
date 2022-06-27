import userReducer from './reducers/UserSlice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authStateReducer from './reducers/AuthSlice'
import registerStateReducer from './reducers/RegisterSlice'
import mainUserReduser from './reducers/MainUserSlice'
import usersSliceReduser from './reducers/UsersListSlice'
import chatUserSliceReducer from './reducers/ChatUserSlice'
import messageReducer from './reducers/MessagesSlice'

const rootReducer = combineReducers({
    userReducer,
    authStateReducer,
    registerStateReducer,
    mainUserReduser,
    usersSliceReduser,
    chatUserSliceReducer,
    messageReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>