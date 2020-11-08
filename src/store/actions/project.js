/* eslint-disable */
import axios from "axios";

import { API } from "../config";
//get
const fetchProject = () => ({
  type: "FETCH_PROJECT_START",
});

const fetchProjectSuccess = (data) => ({
  type: "FETCH_PROJECT_SUCCESS",
  payload: data,
});

const fetchProjectFailed = (msg) => ({
  type: "FETCH_PROJECT_FAILED",
  payload: msg,
});
//pass both userId:(take it from redux) and savedChallengeId:(take it from state.savedChallengeId of WhiteBoardContainer.js)
export const getProjectAction = ({ projectId, userId, token }) => (dispatch) => {
  dispatch(fetchProject());
  axios.get(`${API}/users/${userId}/projects/${projectId}`, { headers: { "Content-Type": "application/json" , Authorization: `Bearer ${token}` }})
    .then(({ data }) => {
      dispatch(fetchProjectSuccess(data));//whiteboard: results[0] //could be null, savedChallengeId , userId
    }).catch((err) => {
      dispatch(fetchProjectFailed(err.message));
    });
};
//post
const postProjectStart = () => ({
  type: "POST_PROJECT_START",
});

const postProjectSuccess = (data) => ({
  type: "POST_PROJECT_SUCCESS",
  payload: data,
});

const postProjectFailed = (msg) => ({
  type: "POST_PROJECT_FAILED",
  payload: msg,
});

export const postProjectAction = ({ project, userId, token }) => (dispatch) => {
  dispatch(postProjectStart());
  axios.post(`${API}/users/${userId}/projects`, { ...project }, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data }) => {
      dispatch(postProjectSuccess(data));//whiteboard: results//the posted whiteboard after saving to database , savedChallengeId : userChallengeId, userId : userId
    }).catch((err) => {
      dispatch(postProjectFailed(err.message));
    });
};
//put (update whiteboard)
const putProjectStart = () => ({
    type: "PUT_PROJECT_START",
  });

  const putProjectSuccess = (data) => ({
    type: "PUT_PROJECT_SUCCESS",
    payload: data,
  });

  const putProjectFailed = (msg) => ({
    type: "PUT_PROJECT_FAILED",
    payload: msg,
  });

  export const putProjectAction = ({ project, projectId, userId, token }) => (dispatch) => {///take the whiteboard from the state.whiteboard of WhiteBoardContainer.js  ///////check if the method override can work, otherwise use put and update server
    dispatch(putProjectStart());
    axios.put(`${API}/users/${userId}/projects/${projectId}`, { ...project }, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })//whiteboard must be destructured because all of its key:value pairs are expected to be in the req.body
      .then(({ data }) => {
        console.log("data return from put", data);
        dispatch(putProjectSuccess(data));//no data is recieved it just redirects to the same whiteboard page (refresh it)
      }).catch((err) => {
        dispatch(putProjectFailed(err.message));
      });
  };

//
