/* eslint-disable */
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import auth from "./reducers/auth";
import whiteboard from "./reducers/whiteboard";
import project from "./reducers/project";
import challenges from "./reducers/challenges";
import challengeDetails from "./reducers/challengeDetails";
import comments from "./reducers/comment";

import profile from "./reducers/profile";
import addChallenge from "./reducers/addChallenge";

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const reducers = combineReducers({ auth, whiteboard, profile, challengeDetails, project, challenges, addChallenge ,comments });

const store = () => createStore(reducers, applyMiddleware(...middlewares));

export default store();
