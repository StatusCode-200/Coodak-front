const initialState = {
  user: {},
  token: "",
  isLoading: false,
  msg: "",
  switchToSignup: false,
  isValidateToken: false,
  validateMsg: "",
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
        ...state, user: payload.user, token: payload.token, isLoading: false, switchToSignup: false,
      };
    case "SIGNUP_FAILED":
      return {
        ...state, msg: payload, isLoading: false,
      };
    case "SWITCH_TO_SIGNUP":
      return {
        ...state, switchToSignup: payload, msg: "",
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...initialState,
      };
    case "VALIDATE_TOKEN_START":
      return {
        ...initialState, isValidateToken: true, validateMsg: "",
      };
    case "VALIDATE_TOKEN_SUCCESS":
      return {
        ...initialState, user: payload.user, isValidateToken: false,
      };
    case "VALIDATE_TOKEN_FAILED":
      return {
        ...initialState, isValidateToken: false, validateMsg: payload,
      };
    default:
      return state;
  }
}
