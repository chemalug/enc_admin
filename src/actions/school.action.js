import axios from "axios";
import * as actionTypes from "./types";

const url = process.env.REACT_APP_PROXY;

export const getSchool = (id) => (dispatch) => {
  axios
    .get(`${url}/api/schools/${id}`)
    .then((res) =>
      dispatch({
        type: actionTypes.SCHOOLS_FETCH_ONE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data })
    );
};

export const getSchools = (params) => (dispatch) => {
  console.log("etrno aqui");

  axios
    .get(`${url}/api/schools/`)
    .then((res) =>
      dispatch({ type: actionTypes.SCHOOLS_FETCH_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GET_ERRORS, payload: err.response.data })
    );
};
