import {
    GET_USERS,
    EDIT_USER
} from './actionTypes';

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export const editUser = (data) => {
    return {
        type: EDIT_USER,
        payload: data
    }
}