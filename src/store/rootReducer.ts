import { combineReducers } from "redux";
import { tweetReducer } from "./ducks/tweets/reducer";

export const rootReducer = combineReducers({
  tweets: tweetReducer,
});