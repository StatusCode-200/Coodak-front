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

// :challengeId/comments
export const getCommentAction = ({ challengeId, token }) => (dispatch) => {
    dispatch(fetchCommentStart());
    axios.get(`${API}/challenges/${challengeId}/comments`,
    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data })=> {
        dispatch(fetchCommentSuccess(data.data));
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
export const postCommentAction = ({ newComment ,  challengeId, userId, token }) => (dispatch) => {
    dispatch(postCommentStart());
    axios.post(`${API}/challenges/${challengeId}/comments`, { comment : newComment},
    { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } })
    .then(({ data })=> {
        dispatch(postCommentSuccess(data.data));
    }).catch((err) =>{
        dispatch(postCommentFaild(err.message));
    });
}