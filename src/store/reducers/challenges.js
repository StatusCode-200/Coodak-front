/* eslint-disable */
const initialState = {
    challenges: [],
    isLoading: false,
    msg: "",
  };

  export default function (state = initialState, action) {
    const {
      type,
      payload,
    } = action;
    switch (type) {
      case "FETCH_CHALLENGES_START": {
        return { ...state, isLoading: true };
      } case "FETCH_CHALLENGES_SUCCESS":
        return {
          ...state, challenges: payload.challenges, isLoading: false,
        };
      case "FETCH_CHALLENGES_FAILED":
        return {
          ...state, msg: payload, isLoading: false,
        };

      default:
        return state;
    }
  }
