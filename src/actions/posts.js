import {
    POSTS_LOADING,
    POST_CREATED, POSTS_FETCHED,
    POST_RETURNED, POST_UPDATED, POST_DELETED 
} from "./types";
import { returnErrors } from "./errors";
import axios from "axios";

/**
 * @summary set async loading action
 * @return {Object} action type
 */
export const setLoading = () => {
    return {
        type: POSTS_LOADING
    };
};

/**
 * @summary create new post data
 * @param {Object} post - object containing post data
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const createPost = post => dispatch => {
    axios.post("/posts", post)
    .then(res => dispatch({
        type: POST_CREATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "POSTS_ERROR")
    ));
};

/**
 * @summary fetch post data
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const fetchPosts = () => dispatch => {
    axios.get("/posts")
    .then(res => dispatch({
        type: POSTS_FETCHED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "POSTS_ERROR")
    ));
};

/**
 * @summary return single post to edit
 * @param {String} id - ObjectId of the post  
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const editPost = id => dispatch => {
    axios.get(`/posts/${id}`)
    .then(res => dispatch({
        type: POST_RETURNED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "POSTS_ERROR")
    ));
};

/**
 * @summary update post object specified by the ObjectId (id)
 * @param {String} id - ObjectId of the post  
 * @param {Object} post - object containing the updated post data specified by the ObjectId (id)
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const updatePost = (id, post) => dispatch => {
    axios.put(`/posts/${id}`, post)
    .then(res => dispatch({
        type: POST_UPDATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "POSTS_ERROR")
    ));
};

/**
 * @summary delete post object specified by the ObjectId (id)
 * @param {String} id - ObjectId of the post  
 * @param {function} dispatch - function that dispatches action to reducer
 * @return {Object} action type and payload
 */
export const deletePost = id => dispatch => {
    axios.delete(`/posts/${id}`)
    .then(res => dispatch({
        type: POST_DELETED,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "POSTS_ERROR")
    ));
};