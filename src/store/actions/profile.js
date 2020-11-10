/* eslint-disable */
import axios from "axios";

import { API } from "../config";

//get User Projects
const fetchUserProjects = () => ({
  type: "FETCH_USERPROJECTS_START",
});

const fetchUserProjectsSuccess = (data) => ({
  type: "FETCH_USERPROJECTS_SUCCESS",
  payload: data,
});

const fetchUserProjectsFailed = (msg) => ({
  type: "FETCH_USERPROJECTS_FAILED",
  payload: msg,
});
export const getUserProjectsAction = ({ userId, token }) => (dispatch) => {
  dispatch(fetchUserProjects());
  axios.get(`${API}/users/${userId}/projects`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
     .then(({ data }) => {
         console.log('dataaaa project Action', data);
      dispatch(fetchUserProjectsSuccess(data.data));
    }).catch((err) => {
      dispatch(fetchUserProjectsFailed(err.message));
    });
};

//get User Challenges
const fetchUserChallenges = () => ({
    type: "FETCH_USERCHALLENGES_START",
  });

  const fetchUserChallengesSuccess = (data) => ({
    type: "FETCH_USERCHALLENGES_SUCCESS",
    payload: data,
  });

  const fetchUserChallengesFailed = (msg) => ({
    type: "FETCH_USERCHALLENGES_FAILED",
    payload: msg,
  });

  export const getUserChallengesAction = ({ userId, token }) => (dispatch) => {
    dispatch(fetchUserChallenges());
    axios.get(`${API}/users/${userId}/challenges`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        console.log('dataaaa challenge Action', data);
        dispatch(fetchUserChallengesSuccess(data.data));
      }).catch((err) => {
        dispatch(fetchUserChallengesFailed(err.message));
      });
  };

//delete User Project
const deleteUserProject = () => ({
  type: "DELETE_USERPROJECT_START",
});

const deleteUserProjectSuccess = (data) => ({
  type: "DELETE_USERPROJECT_SUCCESS",
  payload: data,
});

const deleteUserProjectFailed = (msg) => ({
  type: "DELETE_USERPROJECT_FAILED",
  payload: msg,
});
export const deleteUserProjectAction = ({id ,userId, token }) => (dispatch) => {
  dispatch(deleteUserProject());
  console.log("project id to delete" ,`${API}/users/${userId}/projects/${id}`);
  axios.delete(`${API}/users/${userId}/projects/${id}`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
     .then(({ data }) => {
         console.log('dataaaa project Action', data);
      dispatch(deleteUserProjectSuccess(id));
    }).catch((err) => {
      dispatch(deleteUserProjectFailed(err.message));
    });
};

//delete User challenge
const deleteUserChallenge = () => ({
  type: "DELETE_USERCHALLENGE_START",
});

const deleteUserChallengeSuccess = (data) => ({
  type: "DELETE_USERCHALLENGE_SUCCESS",
  payload: data,
});

const deleteUserChallengeFailed = (msg) => ({
  type: "DELETE_USERCHALLENGE_FAILED",
  payload: msg,
});

export const deleteUserChallengeAction = ({ id ,userId, token }) => (dispatch) => {
  dispatch(deleteUserChallenge());
  console.log("delete route: ",`${API}/users/${userId}/challenges/${id}`);
  axios.delete(`${API}/users/${userId}/challenges/${id}`, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data }) => {
      console.log('dataaaa challenge Action', data);
      dispatch(deleteUserChallengeSuccess(id));
    }).catch((err) => {
      dispatch(deleteUserChallengeFailed(err.message));
    });
};