import {
    COMMENTS_LOADING,
    COMMENT_CREATED, COMMENTS_FETCHED,
    COMMENT_RETURNED, COMMENT_UPDATED, COMMENT_DELETED 
} from "./types";
import { returnErrors } from "./errors";
import axios from "axios";

/**
 * @summary set async loading action
 * @return {Object} action type
 */
export const setLoading = () => {
    return {
        type: COMMENTS_LOADING
    };
};

/**
 * @summary create new comment data
 * @param {Object} comment - object containing comment data
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const createComment = comment => dispatch => {
    axios.post("/comments", comment)
    .then(res => dispatch({
        type: COMMENT_CREATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "COMMENTS_ERROR")
    ));
};

/**
 * @summary fetch comment data
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const fetchComments = () => dispatch => {
    axios.get("/comments")
    .then(res => dispatch({
        type: COMMENTS_FETCHED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "COMMENTS_ERROR")
    ));
};

/**
 * @summary return single comment to edit
 * @param {String} id - ObjectId of the comment  
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const editComment = id => dispatch => {
    axios.get(`/comments/${id}`)
    .then(res => dispatch({
        type: COMMENT_RETURNED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "COMMENTS_ERROR")
    ));
};

/**
 * @summary update comment object specified by the ObjectId (id)
 * @param {String} id - ObjectId of the comment  
 * @param {Object} comment - object containing the updated comment data specified by the ObjectId (id)
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const updateComment = (id, comment) => dispatch => {
    axios.put(`/comments/${id}`, comment)
    .then(res => dispatch({
        type: COMMENT_UPDATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "COMMENTS_ERROR")
    ));
};

/**
 * @summary delete comment object specified by the ObjectId (id)
 * @param {String} id - ObjectId of the comment  
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const deleteComment = id => dispatch => {
    axios.delete(`/comments/${id}`)
    .then(res => dispatch({
        type: COMMENT_DELETED,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "COMMENTS_ERROR")
    ));
};