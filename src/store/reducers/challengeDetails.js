/* eslint-disable */
const initialState = {
    challenge: { _id: ""},
    savedChallengeId: "", // insertedId || savedChallengeId
    solution: null,
    isLoading: false,
    msg: "",
    stderr: null,
    stdout: null,

}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "FETCH_CHALLENGE_START": {
            return { ...state, isLoading: true, savedChallengeId: "", stderr: "", stdout: "" };
        }
        case "FETCH_CHALLENGE_SUCCESS":
            return {
                ...state, challenge: payload.challenge, solution: payload.solution, savedChallengeId: payload.savedChallengeId,  isLoading: false
            };
        case "FETCH_CHALLENGE_FAILED":
            return {
                ...state, msg: payload, isLoading: false,
            };

        case "POST_CHALLENGE_START":
            return { ...state };
        case "POST_CHALLENGE_SUCCESS":
            return { ...state, savedChallengeId: payload._id };
        case "POST_CHALLENGE_FAILED":
            return { ...state, msg: payload };

        case "PUT_CHALLENGE_START":
            return { ...state };
        case "PUT_CHALLENGE_SUCCESS":
            return {  ...state };
        case "PUT_CHALLENGE_FAILED":
            return {  ...state, msg: payload };

        case "TEST_CHALLENGE_START":
            return { ...state };
        case "TEST_CHALLENGE_SUCCESS":
            return { ...state, stderr: payload.stderr, stdout:payload.stdout };
        case "TEST_CHALLENGE_FAILED":
            return { ...state, msg: payload };

        default:
            return state;
    }

}
