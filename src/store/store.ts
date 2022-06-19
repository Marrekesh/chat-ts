import userReducer from './reducers/UserSlice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authStateReducer from './reducers/AuthSlice'
import registerStateReducer from './reducers/RegisterSlice'
const rootReducer = combineReducers({
    userReducer,
    authStateReducer,
    registerStateReducer

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