import axios from "axios";

import { API } from "../config";

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
