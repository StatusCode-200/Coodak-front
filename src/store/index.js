/*eslint-disable*/
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import auth from "./reducers/auth";
import whiteboard from "./reducers/whiteboard";
import challengeDetails from "./reducers/challengeDetails";
import profile from "./reducers/profile";

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const reducers = combineReducers({ auth, whiteboard, profile, challengeDetails });

const store = () => createStore(reducers, applyMiddleware(...middlewares));

export default store();
