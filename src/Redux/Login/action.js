import axios from "axios"
import {
    GET_LOGIN_ACCOUNT_FAILURE, GET_LOGIN_ACCOUNT_REQUEST, GET_LOGIN_ACCOUNT_SUCCESSFULL, POST_CREATE_ACCOUNT_REQUEST, POST_CREATE_ACCOUNT_SUCCESSFULL, POST_CREATE_ACCOUNT_FAILURE,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE
} from "./actionTypes"
import Cookies from 'js-cookie';



const createAccount = (value) => (dispatch) => {
    dispatch({ type: POST_CREATE_ACCOUNT_REQUEST });

    return axios.post("http://localhost:8080/users/register", value)
        .then((res) => {
            console.log(res);
            dispatch({ type: POST_CREATE_ACCOUNT_SUCCESSFULL });

        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: POST_CREATE_ACCOUNT_FAILURE });

        });
};

const loginAccount = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: GET_LOGIN_ACCOUNT_REQUEST })
    return axios.post("http://localhost:8080/users/login", value)
        .then((res) => {
            console.log(res);
            Cookies.set('token', res.data.token, { expires: 2 }); // Expires in 2 days
            Cookies.set('username', res.data.userName, { expires: 2 });
            Cookies.set('userId', res.data.userId, { expires: 2 });
            Cookies.set('email', res.data.email, { expires: 2 });

            localStorage.setItem("isAuth", JSON.stringify(true))
            dispatch({ type: GET_LOGIN_ACCOUNT_SUCCESSFULL })

        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: GET_LOGIN_ACCOUNT_FAILURE });
            localStorage.setItem("isAuth", JSON.stringify(false))
        })

}

const updatePassword = (userId, oldPassword, newPassword) => async (dispatch) => {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    try {
        const response = await axios.patch(`http://localhost:8080/users/${userId}/password`, { newPassword, oldPassword });
        console.log(response.data.message);

        dispatch({ type: UPDATE_PASSWORD_SUCCESS });
        return response.data.message
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({ type: UPDATE_PASSWORD_FAILURE, payload: error.response.data.message });
        return error.response.data.message
    }
};


export { createAccount, loginAccount, updatePassword };