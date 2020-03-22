import {
    POSTS_LOADING,
    POST_CREATED, POSTS_FETCHED,
    POST_RETURNED, POST_UPDATED, POST_DELETED 
} from "./types";
import { returnErrors } from "./errors";
import axios from "axios";

export const setLoading = () => {
    return {
        type: POSTS_LOADING
    };
};

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