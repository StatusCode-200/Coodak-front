/* eslint-disable */
const initialState = {
    challenge: {},
    solution: null,
    savedChallengeId: null,
    userId: null,
    isLoading: false,
    msg: "",
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "FETCH_CHALLENGE_START": {
            return { ...state, isLoading: true };
        }
        case "FETCH_CHALLENGE_SUCCESS":
            return {
                ...state, challenge: payload.challenge, savedChallengeId: payload.savedChallengeId, userId: payload.userId, isLoading: false
            };
        case "FETCH_CHALLENGE_FAILED":
            return {
                ...state, msg: payload, isLoading: false,
            };

        case "POST_CHALLENGE_START": {
            return { ...state, isLoading: true };
        }
        case "POST_CHALLENGE_SUCCESS":
            return {
                ...state, challenge: payload.challenge, savedChallengeId: payload.savedChallengeId, userId: payload.userId, isLoading: false
            };
        case "POST_CHALLENGE_FAILED":
            return {
                ...state, msg: payload, isLoading: false,
            };


        case "PUT_CHALLENGE_START": {
            return { ...state, isLoading: true };
        }
        case "PUT_CHALLENGE_SUCCESS":
            return {
                ...state, challenge: payload.challenge, savedChallengeId: payload.savedChallengeId, userId: payload.userId, isLoading: false
            };
        case "PUT_CHALLENGE_FAILED":
            return {
                ...state, msg: payload, isLoading: false,
            };

        default:
            return state;
    }

}