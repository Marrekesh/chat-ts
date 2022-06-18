export interface IUser {
    id: number,
    email: string
}


export interface LoginState {
    email: string,
    password: string
}

export interface RegistrState extends LoginState {
    name: string,
    surname: string,
    link: string
}