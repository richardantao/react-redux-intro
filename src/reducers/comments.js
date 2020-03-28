import { 
    COMMENTS_LOADING, COMMENTS_ERROR,
    COMMENT_CREATED, COMMENTS_FETCHED,
    COMMENT_RETURNED, COMMENT_UPDATED, COMMENT_DELETED
} from "../actions/types";

const initialState = {
    loading: false,
    comments: []
};

/**
 * @summary reducer that updates the comments branch of the state tree
 * @param  {Object} state - object containing the state tree
 * @param  {Object} action - object containing the dispatched action  
 * @return updated state tree
 */
export default (state = initialState, action) => {
    switch(action.type) {
        case COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case COMMENTS_ERROR:
            return {
                ...state,
                loading: false
            };
        case COMMENT_CREATED:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.payload]
            };
        case COMMENTS_FETCHED:
            return {
                ...state,
                loading: false,
                comments: action.payload
            };
        case COMMENT_RETURNED:
            return {
                ...state,
                loading: false,
                comments: state.comments.map(comment => {
                    const { id } = action.payload;

                    if(comment.id !== id) {
                        return comment;
                    } else return {
                        comment: action.payload
                    };
                })
            };
        case COMMENT_UPDATED:
            return {
                ...state,
                loading: false,
                comments: state.comments.map(comment => {
                    const { id, body, postId } = action.payload;
                    
                    if(comment.id !== id) {
                        return comment;
                    } else return {
                        ...state.comments,
                        comment: {
                            id,
                            body, 
                            postId
                        }
                    };
                })
            };
        case COMMENT_DELETED:
            return {
                ...state,
                loading: false,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };
        default: 
            return state;
    };
};