/* eslint-disable */
const initialState = {
    project: {},
    isLoading: false,
    msg: "",
  };

  export default function (state = initialState, action) {
    const {
      type,
      payload,
    } = action;
    switch (type) {
      case "FETCH_PROJECT_START": {
        return { ...state, isLoading: true };
      } case "FETCH_PROJECT_SUCCESS":
        return {
          ...state, project: payload.project, isLoading: false,
        };
      case "FETCH_PROJECT_FAILED":
        return {
          ...state, msg: payload, isLoading: false,
        };

        case "POST_PROJECT_START": {
            return { ...state };
          } case "POST_PROJECT_SUCCESS":
            return {
              ...state, project: payload.project,
            };
          case "POST_PROJECT_FAILED":
            return {
              ...state, msg: payload,
            };

            case "PUT_PROJECT_START": {
                return { ...state };
              } case "PUT_PROJECT_SUCCESS":
                return {
                  ...state, project: payload.whiteboard,
                };
              case "PUT_PROJECT_FAILED":
                return {
                  ...state, msg: payload,
                };

      default:
        return state;
    }
  }
