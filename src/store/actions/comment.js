/* eslint-disable */
import axios from "axios";

import { API } from "../config";


const fetchCommentStart = () => ({
    type: "FETCH_COMMENT_START"
});

const fetchCommentSuccess = (data) => ({
    type: "FETCH_COMMENT_SUCCESS",
    payload: data,
});


const fetchCommentFaild = (msg) => ({
    type: "FETCH_COMMENT_FAILD",
    payload: msg
})

// :challengeId/comments/json
export const getCommentAction = ({ savedChallengeId, userId, token }) => (dispatch) => {
    dispatch(fetchCommentStart());
    axios.get(`${API}/users/${userId}/challenges/${savedChallengeId}/comments/json`,
    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data })=> {
        dispatch(fetchCommentSuccess(data));
    }).catch((err) =>{
        dispatch(fetchCommentFaild(err.message));
    });
}



const postCommentStart = () => ({
    type: "POST_COMMENT_START"
});

const postCommentSuccess = (data) => ({
    type: "POST_COMMENT_SUCCESS",
    payload: data,
});


const postCommentFaild = (msg) => ({
    type: "POST_COMMENT_FAILD",
    payload: msg
})

// :challengeId/comments/json
export const postCommentAction = ({ comments ,  savedChallengeId, userId, token }) => (dispatch) => {
    dispatch(postCommentStart());
    axios.post(`${API}/users/${userId}/challenges/${savedChallengeId}/comments/json`, { ...comments },
    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data })=> {
        dispatch(postCommentSuccess(data));
    }).catch((err) =>{
        dispatch(postCommentFaild(err.message));
    });
}