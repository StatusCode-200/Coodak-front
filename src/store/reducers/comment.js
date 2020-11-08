/* eslint-disable */
const initialState = {
    comments: {},
    isLoading: false,
    msg: "",
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "FETCH_COMMENT_START": {
            return { ...state, isLoading: true };
        }
        case "FETCH_COMMENT_SUCCESS":
            return {
                ...state, comments: payload.comments, isLoading: false
            }

        case "FETCH_COMMENT_FAILED":
            return {
                ...state, msg: payload, isLoading: false,
            };

            
        case "POST_COMMENT_START": {
            return { ...state, isLoading: true };
        }
        case "POST_COMMENT_SUCCESS":
            return {
                ...state, comments: payload.comments, isLoading: false
            }

        case "POST_COMMENT_FAILED":
            return {
                ...state, msg: payload, isLoading: false,
            };

        default:
            return state;
    }



}