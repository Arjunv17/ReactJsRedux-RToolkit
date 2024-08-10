import { Login, Logout } from "./actionType"

export const LoginAction = (username) => ({
    type: Login,
    payload:{
        username
    }
})

export const LogoutAction = () => ({
    type: Logout
})

