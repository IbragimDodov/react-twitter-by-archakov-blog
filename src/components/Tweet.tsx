import React from 'react'
// import Grid from '@mui/material/Grid';
import classNames from 'classnames';
import { Typography, Grid, IconButton, Paper, Avatar } from '@mui/material';

import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/IosShareOutlined';

import { useHomeStyles } from '../pages/Home/Home';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
      <Paper className={classNames(classes.tweet, classes.tweetsHeader )} variant='outlined' >
        <Avatar
          className={classes.tweetAvatar}
          alt={`this should be ${user.username} photo`}
          src={user.avatarUrl} />
        <div>
          <Typography >
            <b>{user.username}</b>&nbsp;
            <span className={classes.tweetUserName}>{user.fullname}</span>&nbsp;
            <span>-</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>&nbsp;
          </Typography>
          <Typography variant='body1' gutterBottom >
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon color='primary' style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepeatIcon color='primary' style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <FavoriteIcon color='primary' style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon color='primary' style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </Link>
  )
}
