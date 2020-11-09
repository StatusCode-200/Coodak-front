/* eslint-disable */
const initialState = {
    userChallenges:[],
    userProjects: [],
    isLoading: false,
    msg: "",
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "FETCH_UserProjects_START": {
        return { ...state, isLoading: true };
      } case "FETCH_UserProjects_SUCCESS":
        return {
          ...state, userProjects: [...payload], isLoading: false,
        };
      case "FETCH_UserProjects_FAILED":
        return {
          ...state, msg: payload, isLoading: false,
        };

        case "FETCH_UserChallenges_START": {
            return { ...state, isLoading: true };
          } case "FETCH_UserChallenges_SUCCESS":
            return {
              ...state, userChallenges: [...payload], isLoading: false,
            };
          case "FETCH_UserChallenges_FAILED":
            return {
              ...state, msg: payload, isLoading: false,
            };
      default:
        return state;
    }


  }
