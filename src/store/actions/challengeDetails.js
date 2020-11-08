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
export const getChallengeAction = ({ savedChallengeId, userId, token }) => (dispatch) => {
    dispatch(fetchChallengeStart());
    axios.get(`${API}/users/${userId}/challenges/${savedChallengeId}`,
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
        .then(({ data }) => {
            dispatch(fetchChallengeSuccess(data));
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

export const postChallengeAction = ({ challenge , solution , savedChallengeId, userId }) => (dispatch) => {
    dispatch(postChallengeStart());
    axios.post(`${API}/users/${userId}/challenges/${savedChallengeId}`, { ...challenge } , 
    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data })=> {
        dispatch(postChallengeSuccess(data));
    }).catch((err)=> {
        dispatch(postChallengeFaild(err.message));
    });
}

//put 


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

export const putChallengeAction = ({challenge , solution , savedChallengeId, userId , token}) => (dispatch) => {
    dispatch(putChallengeStart());
    axios.put(`${API}/users/${userId}/challenges/${savedChallengeId}`, { ...challenge }, { ...solution },  { headers: { "Content-Type": "application/json" } } )
        .then(({ data })=> {
            dispatch(putChallengeSuccess(data));
        }).catch((err) => {
            dispatch(putChallengeFaild(err.message));
        });
};