import React from "react";
import MainPage from "../pages/mainPage/MainPage";
import LoginPage from "../pages/loginPage/LoginPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import Profile from "../pages/profilePage/ProfilePage";

export interface IRoute {
    path: string;
    component: React.ComponentType,
}

export enum RouteNames {
    LOGIN = '/login',
    DEFAULT = '*',
    REGISTRATION = '/registration',
    MAIN_PAGE = '/main',
    PROFILE = '/profile'
}

export const publicRoutes: Array<IRoute> = [
    {path: RouteNames.LOGIN, component: LoginPage},
    {path: RouteNames.REGISTRATION, component: SignUpPage},
    {path: RouteNames.DEFAULT, component: LoginPage}
]

export const privateRoutes: Array<IRoute> = [
    {path: RouteNames.MAIN_PAGE, component: MainPage},
    {path: RouteNames.PROFILE, component: Profile},
    {path: RouteNames.DEFAULT, component: MainPage}
]