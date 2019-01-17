import {
    FETCH_LOGIN_REQUEST,
    LOGIN_OUT,
} from '../actionTypes';

export const fetchLogin = (payload) => {
    return {
        type: FETCH_LOGIN_REQUEST,
        payload
    }
}

export const fetchLogout = () => {
    return {
        type: LOGIN_OUT
    }
}
  