import { 
    POSTS_LOADING, POSTS_ERROR,
    POST_CREATED, POSTS_FETCHED,
    POST_RETURNED, POST_UPDATED, POST_DELETED
} from "../actions/types";

const initialState = {
    loading: false,
    posts: []
};

/**
 * @summary reducer that updates the posts branch of the state tree
 * @param  {Object} state - object containing the state tree
 * @param  {Object} action - object containing the dispatched action  
 * @return updated state tree
 */
export default (state = initialState, action) => {
    switch(action.type) {
        case POSTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case POSTS_ERROR:
            return {
                ...state,
                loading: false
            };
        case POST_CREATED:
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload]
            };
        case POSTS_FETCHED:
            return {
                ...state,
                loading: false,
                posts: action.payload
            };
        case POST_RETURNED:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => {
                    const { _id } = action.payload;

                    if(post._id !== _id) {
                        return post;
                    } else return {
                        post: action.payload
                    };
                })
            };
        case POST_UPDATED:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => {
                    const { _id, name, description } = action.payload;
                    
                    if(post._id !== _id) {
                        return post;
                    } else return {
                        ...state.posts,
                        post: {
                            _id,
                            name, 
                            description
                        }
                    };
                })
            };
        case POST_DELETED:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        default: 
            return state;
    };
};