import { combineReducers } from "redux";

import post from "./posts";
import comment from "./comments";
import error from "./errors";

/**
 * @param {Object} post - post branch of the state tree
 * @param {Object} comment - comment branch of the state tree
 * @param {Object} error - error branch of the state tree
 */
export default combineReducers({ post, comment, error });