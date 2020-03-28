import { ERRORS_RETURNED, ERRORS_CLEARED } from "../actions/types";

const initialState = {
    message: {},
    status: null,
    id: null
};

/**
 * @summary reducer that updates the posts branch of the state tree
 * @param  {Object} state - object containing the state tree
 * @param  {Object} action - object containing the dispatched action  
 * @return updated state tree
 */
export default (state = initialState, action) => {
    switch(action.type) {
        case ERRORS_RETURNED:
            return {
                message: action.payload.message,
                status: action.payload.status,
                id: action.payload.id
            };
        case ERRORS_CLEARED:
            return {
                message: {},
                status: null,
                id: null
            };
        default:
            return state;
    };
};