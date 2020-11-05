const initialState = {
  user: {},
  token: "",
  isLoading: false,
  msg: "",
  switchToSignup: false,
};

export default function (state = initialState, action) {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case "LOGIN_START": {
      return { ...state, isLoading: true };
    } case "LOGIN_SUCCESS":
      return {
        ...state, user: payload.user, token: payload.token, isLoading: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state, msg: payload, isLoading: false,
      };
    case "SIGNUP_START": {
      return { ...state, isLoading: true };
    } case "SIGNUP_SUCCESS":
      return {
        ...state, user: payload.user, token: payload.token, isLoading: false,
      };
    case "SIGNUP_FAILED":
      return {
        ...state, msg: payload, isLoading: false,
      };
    case "SWITCH_TO_SIGNUP":
      return {
        ...state, switchToSignup: payload, msg: "",
      };
    default:
      return state;
  }
}
