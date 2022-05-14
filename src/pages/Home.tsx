import React from 'react'
import Grid from '@mui/material/Grid';

import { Typography, IconButton, Container, InputBase, Theme, Paper, Avatar } from '@mui/material';
import { createStyles } from '@mui/styles';
import { withStyles } from '@mui/styles';


import { createTheme } from '@mui/material';




import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import { Tweet } from './Tweet';
import { SideMenu } from './SideMenu';

const theme = createTheme();

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '15px 0 !important',
  },
  logoIcon: {
    fontSize: '38px !important',
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        borderRadius: 30,
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
    },
    '& div': {
      position: 'relative',
      borderRadius: 30,
      left: -23,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 25px 0 30px !important',
      height: '50px !important',
      marginBottom: 15,
      transition: 'background-color 0.15s ease-in-out',
    },
    
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: '10px !important',
  },
  sideMenuListItemIcon: {
    fontSize: '32px !important',
    // marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3),
    marginTop: '25px !important',
    // width: 230,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100% !important',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderRadius: 0,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800,
    },
  },
  tweet: {
    cursor: 'pointer',
    paddingTop: 10,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    position: 'relative',
    left: -9,
    display: 'flex !important',
    justifyContent: 'space-between',
    width: 450,
  },
  tweetUserName: {
    color: grey[500],
  },
}));

const SearchTextField = withStyles(() => createStyles({
  input: {
    borderRadius: 30,
    backgroundColor: '#e6ecf0 !important',
    height: 45,
    padding: 0,
  },
}))(InputBase);

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes}/>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant='outlined' >
            <Paper className={classes.tweetsHeader} variant='outlined' >
              <Typography variant='h6' >Главная</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                user={{
                  fullname: '@nikFullName',
                  username: 'nikName',
                  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/KCon_2017_LA_Girl%27s_Day.jpg/1920px-KCon_2017_LA_Girl%27s_Day.jpg',
                }}
                text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex ratione sint perspiciatis. Reiciendis, consectetur. Voluptas suscipit non vero eos ratione, asperiores, incidunt consequatur commodi necessitatibus ut recusandae rerum fugit.' }
                classes={classes} />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder='Поиск по Твиттеру' fullWidth />
        </Grid>
      </Grid>
    </Container>
  )
}
