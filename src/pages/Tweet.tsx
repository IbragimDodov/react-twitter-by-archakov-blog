import React from 'react'
import Grid from '@mui/material/Grid';
import classNames from 'classnames';
import { Typography, IconButton, Paper, Avatar } from '@mui/material';

import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/IosShareOutlined';

import { useHomeStyles } from './Home';


interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
};

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweet, classes.tweetsHeader )} variant='outlined' >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`this should be ${user.username} photo`}
            src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
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
        </Grid>
      </Grid>
    </Paper>
  )
}
