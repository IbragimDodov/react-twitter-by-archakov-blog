
import { Tweet } from "../tweets/contracts/state";
import { SetTweetLoadingStateActionInterface } from "./contracts/actionTypes";
import { SetTweetDataActionInterface } from "./contracts/actionTypes";
import { FetchTweetDataActionInterface } from "./contracts/actionTypes";
import { TweetActionsType } from "./contracts/actionTypes";
import { LoadingState, TweetState } from "./contracts/state";




export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (payload: LoadingState,): SetTweetLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
});

export type TweetActions = 
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetTweetLoadingStateActionInterface;