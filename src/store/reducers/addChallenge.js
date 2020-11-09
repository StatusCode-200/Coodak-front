/* eslint-disable */
const initialState = {
    challenge: {
        name: '',
        summary: '',
        description:'',
        starter_code: '',
        test: '',
    },
    isLoading: false,
    msg: "",
  };

  export default function (state = initialState, action) {
    const {
      type,
      payload,
    } = action;
    switch (type) {

        case "POST_CHALLENGE_START": {
            return { ...state };
          } case "POST_CHALLENGE_SUCCESS":
            return {
              ...state, challenge: payload.challenge,
            };
          case "POST_CHALLENGE_FAILED":
            return {
              ...state, msg: payload,
            };

      default:
        return state;
    }
  }
