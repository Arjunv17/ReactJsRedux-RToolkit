import { Login, Logout } from "../Actions/actionType";

const init = {
    isAuthenticated: false,
    username: null
}

const authReducer = (state = init, action) => {
    console.log(action,"hshsh")

    switch (action.type) {
        case Login:
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username
            }
        case Logout:
            return {
                ...state,
                isAuthenticated: false,
                username: null
            }


        default:
            return state;
    }
}
export default authReducer