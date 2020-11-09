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
      case "FETCH_USERPROJECTS_START": {
        return { ...state, isLoading: true };
      } case "FETCH_USERPROJECTS_SUCCESS":
        return {
          ...state, userProjects: [...payload], isLoading: false,
        };
      case "FETCH_USERPROJECTS_FAILED":
        return {
          ...state, msg: payload, isLoading: false,
        };

        case "FETCH_USERCHALLENGES_START": {
            return { ...state, isLoading: true };
          } case "FETCH_USERCHALLENGES_SUCCESS":
            return {
              ...state, userChallenges: [...payload], isLoading: false,
            };
          case "FETCH_USERCHALLENGES_FAILED":
            return {
              ...state, msg: payload, isLoading: false,
            };

            case "DELETE_USERPROJECT_START": {
              return { ...state, isLoading: true };
            } case "DELETE_USERPROJECT_SUCCESS":
              return {
                ...state, userProjects : state.userProjects.filter(project => project._id !== payload),isLoading: false,
              };
            case "DELETE_USERPROJECT_FAILED":
              return {
                ...state, msg: payload, isLoading: false,
              };

              case "DELETE_USERCHALLENGE_START": {
                return { ...state, isLoading: true };
              } case "DELETE_USERCHALLENGE_SUCCESS":
                return {
                  ...state, userChallenges : state.userChallenges.filter(challenge => challenge._id !== payload),isLoading: false,
                };
              case "DELETE_USERCHALLENGE_FAILED":
                return {
                  ...state, msg: payload, isLoading: false,
                };

      default:
        return state;
    }


  }
