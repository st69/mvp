import {
    GET_USERS,
    EDIT_USER
} from './actionTypes';

const initialState = {
    users: []
}

const Users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        case EDIT_USER:
            const updatedUsers = state.users.map(user => user.id === action.payload.id ? action.payload : user.email === action.payload.email ? action.payload : user)
            return {
                ...state,
                users: updatedUsers
            }
        default:
            return state
    }
}

export default Users