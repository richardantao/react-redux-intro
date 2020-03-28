import { ERRORS_RETURNED, ERRORS_CLEARED } from "./types";

/**
 * @summary return errors to UI
 * @param  {String} message - error message
 * @param  {Number} status - http status code
 * @param  {String} id - error identification
 * @return {Object} action type and payload
 */
export const returnErrors = (message, status, id = null) => {
    return {
        type: ERRORS_RETURNED,
        payload: { message, status, id }
    };
};

/**
 * @summary clears UI errors
 * @return {Object} action type
 */
export const clearErrors = () => {
    return {
        type: ERRORS_CLEARED
    };
};