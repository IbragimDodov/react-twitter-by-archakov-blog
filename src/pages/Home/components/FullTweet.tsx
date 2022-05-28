import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchTweetData } from '../../../store/ducks/tweet/actionsCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../Home';
import { Avatar, CircularProgress, Paper, Typography } from '@mui/material';
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
    return (<Paper className={classes.fullTweet} >
        <div className={classes.tweetsHeaderUser}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`this should be ${tweetData.user.username} photo`}
            src={tweetData.user.avatarUrl} />
          <Typography >
            <b>{tweetData.user.username}</b>&nbsp;
            <div>
              <span className={classes.tweetUserName}>{tweetData.user.fullname}</span>&nbsp;
              <span>-</span>&nbsp;
              <span className={classes.tweetUserName}>1 ч</span>&nbsp;
            </div>
          </Typography>
        </div>
        <Typography className={classes.fullTweetText} gutterBottom >
          {tweetData.text}
        </Typography>
      </Paper>);
  }

  return null;
};
