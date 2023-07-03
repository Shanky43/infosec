import axios from "axios";
import {
    GET_INFOSEC_DATA_FAILURE, GET_INFOSEC_DATA_REQUEST, GET_INFOSEC_DATA_SUCCESSFULL,
    PATCH_INFOSEC_DATA_FAILURE, PATCH_INFOSEC_DATA_REQUEST, PATCH_INFOSEC_DATA_SUCCESS,POST_INFOSEC_DATA_REQUEST,
    POST_INFOSEC_DATA_SUCCESSFUL,
    POST_INFOSEC_DATA_FAILURE
} from "./actionTypes";
import Cookies from 'js-cookie';

const getInfosecData = () => (dispatch) => {
    const userId = Cookies.get('userId');
    // console.log(userId, "inside");
    dispatch({ type: GET_INFOSEC_DATA_REQUEST });
    const token = Cookies.get('token');
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    axios.get("http://localhost:8080/infosec", {
        headers,
        params: { userId },
    })
        .then((res) => {
            console.log(res.data);
            dispatch({ type: GET_INFOSEC_DATA_SUCCESSFULL, payload: res.data });

        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: GET_INFOSEC_DATA_FAILURE });
        });
};

const postInfosecData = (data) => (dispatch) => {
    dispatch({ type: POST_INFOSEC_DATA_REQUEST });
  
    const token = Cookies.get('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    axios
      .post('http://localhost:8080/infosec', data, { headers })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: POST_INFOSEC_DATA_SUCCESSFUL, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: POST_INFOSEC_DATA_FAILURE });
      });
  };
  


const patchInfosecData = (id, updatedData) => (dispatch) => {
    console.log(id, "udser");
    const userId = Cookies.get('userId');
    console.log(updatedData, "updateddata");
    dispatch({ type: PATCH_INFOSEC_DATA_REQUEST });
    const token = Cookies.get('token');
    console.log(token);
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    return axios
        .patch(`http://localhost:8080/infosec/update/${id}`, updatedData, {
            headers,
            params: { userId },
        })
        .then((res) => {
            dispatch({ type: PATCH_INFOSEC_DATA_SUCCESS, payload: res.data });
            return res.data; // Return the response data
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: PATCH_INFOSEC_DATA_FAILURE });
            throw err; // Throw the error to be caught in the caller
        });
};
export { getInfosecData, patchInfosecData,postInfosecData };
