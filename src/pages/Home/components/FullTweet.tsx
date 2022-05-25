import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet';
import { fetchTweetData } from '../../../store/ducks/tweet/actionsCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../Home';
import { CircularProgress } from '@mui/material';
import { setTweetData } from '../../../store/ducks/tweet/actionsCreators';

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const params: {id?: string} = useParams();
  const id = params.id;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
    }

  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.tweetCentered}><CircularProgress/></div>
    )
  }

  if (tweetData) {
    return <Tweet classes={classes} {...tweetData} />
  }

  return null;
};
