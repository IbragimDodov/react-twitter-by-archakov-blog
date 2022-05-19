// @ts-nocheck
import axios from "axios";
import { setTweets, TweetsActionsType } from "./actionsCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setTweetsLoadingState } from "./actionsCreators";
import { LoadingState } from "./contracts/state";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga()  {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}