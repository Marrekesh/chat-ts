import { AuthUserDataString, AuthUserDataBoolean} from './actionsTypes'

//user
export interface UserState {
    id: AuthUserDataString,
    email: AuthUserDataString | null
    isLoading?: AuthUserDataBoolean,
    error?: AuthUserDataString
}

//auth
export interface LoginState {
    email: AuthUserDataString,
    password: AuthUserDataString
}

export interface AuthState {
    loginState: LoginState,
    isLoading?: AuthUserDataBoolean,
    error?: AuthUserDataString,
    status: AuthUserDataBoolean
}

//registr
export interface RegistrState {
    email: AuthUserDataString,
    password: AuthUserDataString
    name: AuthUserDataString,
    surname: AuthUserDataString,
}

export interface RegisterState {
    registrState: RegistrState,
    status: AuthUserDataBoolean
    isLoading?: boolean,
    error?: string
}

