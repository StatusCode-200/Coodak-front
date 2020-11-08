/* eslint-disable */
import axios from "axios";

import { API } from "../config";
//get
const fetchChallenges = () => ({
  type: "FETCH_CHALLENGES_START",
});

const fetchChallengesSuccess = (data) => ({
  type: "FETCH_CHALLENGES_SUCCESS",
  payload: data,
});

const fetchChallengesFailed = (msg) => ({
  type: "FETCH_CHALLENGES_FAILED",
  payload: msg,
});
//pass both userId:(take it from redux) and savedChallengeId:(take it from state.savedChallengeId of WhiteBoardContainer.js)
export const getChallengesAction = ({ token }) => (dispatch) => {
  dispatch(fetchChallenges());
  axios.get(`${API}/challenges`, { headers: { "Content-Type": "application/json" , Authorization: `Bearer ${token}` }})
    .then(({ data }) => {
      dispatch(fetchChallengesSuccess(data));//whiteboard: results[0] //could be null, savedChallengeId , userId
    }).catch((err) => {
      dispatch(fetchChallengesFailed(err.message));
    });
};

//
