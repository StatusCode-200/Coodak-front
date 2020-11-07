import Cookies from "universal-cookie";

import axios from "axios";

import { API } from "../config";

const cookies = new Cookies();

const loginStart = () => ({
  type: "LOGIN_START",
});

const loginSuccess = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});

const loginFailed = (msg) => ({
  type: "LOGIN_FAILED",
  payload: msg,
});

export const loginAction = ({ username, password }) => (dispatch) => {
  dispatch(loginStart());
  axios.post(`${API}/users/signin`, { username, password }, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => {
      cookies.set("token", data.token);
      dispatch(loginSuccess(data));
    }).catch((err) => {
      dispatch(loginFailed(err.message));
    });
};

const signupStart = () => ({
  type: "SIGNUP_START",
});

const signupSuccess = (data) => ({
  type: "SIGNUP_SUCCESS",
  payload: data,
});

const signupFailed = (msg) => ({
  type: "SIGNUP_FAILED",
  payload: msg,
});

export const signupAction = ({ username, email, password }) => (dispatch) => {
  dispatch(signupStart());
  axios.post(`${API}/users/signup`, { username, email, password }, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => {
      dispatch(signupSuccess(data));
    }).catch((err) => {
      dispatch(signupFailed(err.message));
    });
};

const setSwitchToSignup = (value) => ({
  type: "SWITCH_TO_SIGNUP",
  payload: value,
});

export const setSwitchToSignupAction = (value) => (dispatch) => {
  dispatch(setSwitchToSignup(value));
};

const logoutSuccess = () => ({
  type: "SIGNOUT_SUCCESS",
});

export const logoutAction = () => (dispatch) => {
  cookies.remove("token");
  dispatch(logoutSuccess());
};

const validateTokenStart = () => ({
  type: "VALIDATE_TOKEN_START",
});

const validateTokenSuccess = (data) => ({
  type: "VALIDATE_TOKEN_SUCCESS",
  payload: data,
});

const validateTokenFailed = (msg) => ({
  type: "VALIDATE_TOKEN_FAILED",
  payload: msg,
});

export const validateTokenAction = () => (dispatch) => {
  const cookie = cookies.get("token");
  if (!cookie) {
    dispatch(validateTokenFailed("no token"));
  } else {
    dispatch(validateTokenStart());
    axios.get(`${API}/users/validateToken`, { headers: { Authorization: `Bearer ${cookie}` } })
      .then(({ data }) => {
        dispatch(validateTokenSuccess(data));
      }).catch((err) => { // inValidToken
        cookies.remove("token");
        dispatch(validateTokenFailed(err.message));
      });
  }
};
