import React from 'react'
// import Grid from '@mui/material/Grid';
import classNames from 'classnames';
import { Typography, Grid, IconButton, Paper, Avatar } from '@mui/material';




import { useHomeStyles } from '../pages/Home/Home';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FullTweet } from '../pages/Home/components/FullTweet';


interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
};

export const Tweet: React.FC<TweetProps> = ({_id, text, user, classes}: TweetProps): React.ReactElement => {
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
      
    </Link>
  )
}
