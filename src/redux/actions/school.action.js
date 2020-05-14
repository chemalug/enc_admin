import axios from "axios";
import * as actionTypes from "./types";
import { beginApiCall, apiCallError } from "./api.action";
import { getSchoolsApi } from "services/schools.service";

export function loadSchoolsSuccess(schools) {
  return { type: actionTypes.SCHOOLS_FETCH_SUCCESS, schools };
}

export function loadSchools() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return axios
      .get(`${process.env.REACT_APP_PROXY}/api/schools/`, {
        headers: {
          Authorization: localStorage.jwtToken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => dispatch(loadSchoolsSuccess(response)))
      .catch((error) => dispatch(apiCallError(error)));
  };
}
/*
export const getSchools = () => async (dispatch) => {
  const response = await axios.get(
    `${process.env.REACT_APP_PROXY}/api/schools/`,
    {
      headers: {
        Authorization: localStorage.jwtToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return dispatch({
    type: actionTypes.SCHOOLS_FETCH_SUCCESS,
    payload: response.data,
  });
};
*/
