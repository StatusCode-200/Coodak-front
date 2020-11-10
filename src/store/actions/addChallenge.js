/* eslint-disable */
import axios from "axios";

import { API } from "../config";

//post
const postChallengeStart = () => ({
  type: "POST_CHALLENGE_START",
});

const postChallengeSuccess = (data) => ({
  type: "POST_CHALLENGE_SUCCESS",
  payload: data,
});

const postChallengeFailed = (msg) => ({
  type: "POST_CHALLENGE_FAILED",
  payload: msg,
});

export const postChallengeAction = ({ challenge, token }) => (dispatch) => {
  dispatch(postChallengeStart());
  axios.post(`${API}/challenges`, { ...challenge }, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data }) => {
      dispatch(postChallengeSuccess(data.data));//whiteboard: results//the posted whiteboard after saving to database , savedChallengeId : userChallengeId, userId : userId
    }).catch((err) => {
      dispatch(postChallengeFailed(err.message));
    });
};

const flushAddChallenge = () => ({
  type: "FLUSH_ADD_CHALLENGE",
});

export const flushAddChallengeAction = () => (dispatch) => {
  dispatch(flushAddChallenge());
}
