/* eslint-disable */
const initialState = {
    whiteboard: {},
    isLoading: false,
    msg: "",
  };

  export default function (state = initialState, action) {
    const {
      type,
      payload,
    } = action;
    switch (type) {
      case "FETCH_WHITEBOARD_START": {
        return { ...state, isLoading: true };
      } case "FETCH_WHITEBOARD_SUCCESS":
        return {
          ...state, whiteboard: payload.whiteboard, isLoading: false,
        };
      case "FETCH_WHITEBOARD_FAILED":
        return {
          ...state, msg: payload, isLoading: false,
        };

        case "POST_WHITEBOARD_START": {
            return { ...state };
          } case "POST_WHITEBOARD_SUCCESS":
            return {
              ...state, whiteboard: payload.whiteboard,
            };
          case "POST_WHITEBOARD_FAILED":
            return {
              ...state, msg: payload,
            };

            case "PUT_WHITEBOARD_START": {// from server no data recieved so fix it from server
                return { ...state };
              } case "PUT_WHITEBOARD_SUCCESS":
                return {
                  ...state, whiteboard: payload.whiteboard,
                };
              case "PUT_WHITEBOARD_FAILED":
                return {
                  ...state, msg: payload,
                };

      default:
        return state;
    }
  }
