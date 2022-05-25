// @ts-nocheck
import axios from "axios";
import { addTweet, setTweets, TweetsActionsType } from "./actionsCreators";
import { call, put, takeLa, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweetsLoadingState } from "./actionsCreators";
import { LoadingState, Tweet } from "../tweets/contracts/state";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface) {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substring(2),
      text: payload,
      "user": {
        "fullname": "Craft Shelton",
        "username": "brittney",
        "avatarUrl": "https://source.unsplash.com/random/100x100?5",
      },
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga()  {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}