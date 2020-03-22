import { combineReducers } from "redux";

import post from "./posts";
import error from "./errors";

export default combineReducers({ post, error });