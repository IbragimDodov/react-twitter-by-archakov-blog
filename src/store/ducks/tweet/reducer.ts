import produce, {Draft} from 'immer';
import { TweetActions } from './actionsCreators';
import { LoadingState, TweetState } from './contracts/state';
import { TweetActionsType } from './contracts/actionTypes';

export const initialTweetState: TweetState = {
  data: undefined,
  loadingState: LoadingState.NEVER
}

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {

  switch (action.type) {
    case TweetActionsType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetActionsType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }

}, initialTweetState);