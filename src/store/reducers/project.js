/* eslint-disable */
const initialState = {
    project: {
      name: "",
      code_html: "",
      code_css: "",
      code_js: "",
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
      case "FETCH_PROJECT_START": {
        return { ...initialState, isLoading: true };
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
              ...state, project: payload,
            };
          case "POST_PROJECT_FAILED":
            return {
              ...state, msg: payload,
            };

            case "PUT_PROJECT_START": {
                return { ...state };
              } case "PUT_PROJECT_SUCCESS":
                return {
                  ...state,
                };
              case "PUT_PROJECT_FAILED":
                return {
                  ...state, msg: payload,
                };

            case "FLUSH_PROJECT":
              return { ...initialState };

      default:
        return state;
    }
  }
