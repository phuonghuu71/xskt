import * as api from '../api';

// login
export const loginUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user);
        dispatch({ type: 'LOGIN', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// login auth
export const loginAuth = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginAuth(user);
        dispatch({ type: 'AUTH', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

// register
export const registerUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.registerUser(user);
        dispatch({ type: 'REGISTER', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
