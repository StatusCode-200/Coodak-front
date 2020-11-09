/* eslint-disable */
import axios from "axios";

import { API } from "../config";


const fetchChallengeStart = () => ({
    type: "FETCH_CHALLENGE_START"
})

const fetchChallengeSuccess = (data) => ({
    type: "FETCH_CHALLENGE_SUCCESS",
    payload: data,
})

const fetchChallengeFaild = (msg) => ({
    type: "FETCH_CHALLENGE_FAILED",
    payload: msg
})

///     users/:userId/challenges/:challengeId"
export const getChallengeAction = ({ challengeId, userId, token }) => (dispatch) => {
    dispatch(fetchChallengeStart());
    axios.get(`${API}/users/${userId}/challenges/${challengeId}`,
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
        .then(({ data }) => {
          if (data.solution){
            console.log("savedChalleng");
            dispatch(fetchChallengeSuccess(data));
          } else {
            console.log("fetch again challenge without solution");
            axios.get(`${API}/challenges/${challengeId}`,
                { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
                .then(({ data }) => {
                  dispatch(fetchChallengeSuccess(data));
                });
          }
        }).catch((err) => {
            dispatch(fetchChallengeFaild(err.message));
        });
};


const postChallengeStart = () => ({
    type: "POST_CHALLENGE_START"
});

const postChallengeSuccess = (data) => ({
    type: "POST_CHALLENGE_SUCCESS",
    payload: data,
});

const postChallengeFaild = (msg) => ({
    type: "POST_CHALLENGE_FAILED",
    payload: msg
});

export const postChallengeAction = ({ solution , userId, challengeId, token }) => (dispatch) => {
    dispatch(postChallengeStart());
    axios.post(`${API}/users/${userId}/challenges`, { solution, challenge_id: challengeId },
    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data })=> {
      alert("success");
        dispatch(postChallengeSuccess(data.data));
    }).catch((err)=> {
        dispatch(postChallengeFaild(err.message));
    });
}

const putChallengeStart = () => ({
    type: "PUT_CHALLENGE_START"
});

const putChallengeSuccess = (data) => ({
    type: "PUT_CHALLENGE_SUCCESS",
    payload: data,
});

const putChallengeFaild = (msg) => ({
    type: "PUT_CHALLENGE_FAILED",
    payload: msg
});

export const putChallengeAction = ({ solution , userId, challengeId , token}) => (dispatch) => {
    dispatch(putChallengeStart());
    axios.put(`${API}/users/${userId}/challenges/${challengeId}`,  { solution },  { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } } )
        .then(({ data })=> {
          alert("success");
            dispatch(putChallengeSuccess(data));
        }).catch((err) => {
            dispatch(putChallengeFaild(err.message));
        });
};

//test solution

const testChallengeStart = () => ({
    type: "TEST_CHALLENGE_START"
});

const testChallengeSuccess = (data) => ({
    type: "TEST_CHALLENGE_SUCCESS",
    payload: data,
});

const testChallengeFaild = (msg) => ({
    type: "TEST_CHALLENGE_FAILED",
    payload: msg
});

export const checkSolutionAction = ({solution, challengeId, userId, token}) => (dispatch) => {
    dispatch(testChallengeStart());
    axios.post(`${API}/challenges/${challengeId}/test`, { solution: solution },
    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data })=> {
        dispatch(testChallengeSuccess(data.result));
    }).catch((err)=> {
        dispatch(testChallengeFaild(err.message));
    });
}