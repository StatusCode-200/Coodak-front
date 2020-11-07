/* eslint-disable */
import axios from "axios";

import { API } from "../config";
//get
const fetchWhiteboard = () => ({
  type: "FETCH_WHITEBOARD_START",
});

const fetchWhiteboardSuccess = (data) => ({
  type: "FETCH_WHITEBOARD_SUCCESS",
  payload: data,
});

const fetchWhiteboardFailed = (msg) => ({
  type: "FETCH_WHITEBOARD_FAILED",
  payload: msg,
});
//pass both userId:(take it from redux) and savedChallengeId:(take it from state.savedChallengeId of WhiteBoardContainer.js)
export const getWhiteboradAction = ({ savedChallengeId, userId }) => (dispatch) => {
  dispatch(fetchWhiteboard());
  axios.get(`${API}/users/${userId}/challenges/${savedChallengeId}/whiteboard`, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => {
      dispatch(fetchWhiteboardSuccess(data));//whiteboard: results[0] //could be null, savedChallengeId , userId
    }).catch((err) => {
      dispatch(fetchWhiteboardFailed(err.message));
    });
};
//post
const postWhiteboardStart = () => ({
  type: "POST_WHITEBOARD_START",
});

const postWhiteboardSuccess = (data) => ({
  type: "POST_WHITEBOARD_SUCCESS",
  payload: data,
});

const postWhiteboardFailed = (msg) => ({
  type: "POST_WHITEBOARD_FAILED",
  payload: msg,
});

export const postWhiteboardAction = ({ whiteboard, savedChallengeId, userId }) => (dispatch) => {
  dispatch(postWhiteboardStart());
  axios.post(`${API}/users/${userId}/challenges/${savedChallengeId}/whiteboard`, { ...whiteboard }, { headers: { "Content-Type": "application/json" } })
    .then(({ data }) => {
      dispatch(postWhiteboardSuccess(data));//whiteboard: results//the posted whiteboard after saving to database , savedChallengeId : userChallengeId, userId : userId
    }).catch((err) => {
      dispatch(postWhiteboardFailed(err.message));
    });
};
//put (update whiteboard)
const putWhiteboardStart = () => ({
    type: "PUT_WHITEBOARD_START",
  });
  
  const putWhiteboardSuccess = (data) => ({
    type: "PUT_WHITEBOARD_SUCCESS",
    payload: data,
  });
  
  const putWhiteboardFailed = (msg) => ({
    type: "PUT_WHITEBOARD_FAILED",
    payload: msg,
  });
  
  export const putWhiteboardAction = ({ whiteboard, savedChallengeId, userId }) => (dispatch) => {///take the whiteboard from the state.whiteboard of WhiteBoardContainer.js  ///////check if the method override can work, otherwise use put and update server
    dispatch(putWhiteboardStart());
    axios.put(`${API}/users/${userId}/challenges/${savedChallengeId}/whiteboard`, { ...whiteboard }, { headers: { "Content-Type": "application/json" } })//whiteboard must be destructured because all of its key:value pairs are expected to be in the req.body
      .then(({ data }) => {
        dispatch(putWhiteboardSuccess(data));//no data is recieved it just redirects to the same whiteboard page (refresh it)
      }).catch((err) => {
        dispatch(putWhiteboardFailed(err.message));
      });
  };

//
