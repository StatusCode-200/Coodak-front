/* eslint-disable */
const initialState = {
    challenge: {
        _id: '',
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
            return { ...initialState };
          } case "POST_CHALLENGE_SUCCESS":
            return {
              ...state, challenge: payload,
            };
          case "POST_CHALLENGE_FAILED":
            return {
              ...state, msg: payload,
            };
          case "FLUSH_ADD_CHALLENGE": 
          return { ...initialState };

      default:
        return state;
    }
  }
