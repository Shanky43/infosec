import { GET_LOGIN_ACCOUNT_FAILURE, GET_LOGIN_ACCOUNT_REQUEST, GET_LOGIN_ACCOUNT_SUCCESSFULL, POST_CREATE_ACCOUNT_REQUEST, POST_CREATE_ACCOUNT_SUCCESSFULL, POST_CREATE_ACCOUNT_FAILURE } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    token: "",

}



const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_CREATE_ACCOUNT_REQUEST:
            return { ...state, isLoading: true };

        case POST_CREATE_ACCOUNT_SUCCESSFULL:
            return { ...state, isLoading: false, isError: false }

        case GET_LOGIN_ACCOUNT_REQUEST:
            return { ...state, isLoading: true };

        case GET_LOGIN_ACCOUNT_SUCCESSFULL:
            return { ...state, isLoading: false, token: payload }

        case GET_LOGIN_ACCOUNT_FAILURE:
            return { ...state, isLoading: false, isError: true }

        case POST_CREATE_ACCOUNT_FAILURE:
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export { reducer }