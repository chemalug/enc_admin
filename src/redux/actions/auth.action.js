import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "utils/setAuthToken";
import { GET_ERRORS, LOGIN_SUCCESS } from "./types";

//const url_service = "https://enc-authentication.herokuapp.com";
const url_service = process.env.REACT_APP_PROXY;

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(url_service + "/api/auth/register", userData)
    .then((res) => history.push("/auth/login"))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const loginUser = (userData) => (dispatch) => {
  axios
    //.post("https://enc-authentication.herokuapp.com/api/auth/login", userData)
    .post(url_service + "/api/auth/login", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
      console.log(err.response.data);
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: LOGIN_SUCCESS,
    payload: decoded,
  };
};
/*
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};*/

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
