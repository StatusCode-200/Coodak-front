/* eslint-disable */
const initialState = {
    project: {
      _id: null,
      owner_id: null,
      name: null,
      code_html: null,
      code_css: null,
      code_js: null,
    },
      insertedId: "",
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
              ...state, project: payload.project, insertedId: payload.project._id,
            };
          case "POST_PROJECT_FAILED":
            return {
              ...state, msg: payload,
            };

            case "PUT_PROJECT_START": {
                return { ...state };
              } case "PUT_PROJECT_SUCCESS":
                return {
                  ...state, project: payload.project,
                };
              case "PUT_PROJECT_FAILED":
                return {
                  ...state, msg: payload,
                };

      default:
        return state;
    }
  }
