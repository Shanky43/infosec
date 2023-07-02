import { GET_INFOSEC_DATA_FAILURE, GET_INFOSEC_DATA_REQUEST, GET_INFOSEC_DATA_SUCCESSFULL } from './actionTypes';

const initialState = {
    isLoading: false,
    isError: false,
    infosecdata: [],
    successmessage: "",
    errormessage: ""
}



const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_INFOSEC_DATA_REQUEST:
            return { ...state, isLoading: true };

        case GET_INFOSEC_DATA_SUCCESSFULL:
            return { ...state, isLoading: false, infosecdata: payload, successmessage: "Patch Successfully..." }

        case GET_INFOSEC_DATA_FAILURE:
            return { ...state, isLoading: false, isError: true, errormessage: "Updated Successfully" }

        default:
            return state
    }
}

export { reducer }