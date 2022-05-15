import React from 'react'
import Grid from '@mui/material/Grid';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAddAlt1Outlined';

import {
  InputAdornment,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  // withStyles,
  Typography,
  TextField,
  IconButton,
  Container,
  Theme,
  createTheme,
  Paper,
  Avatar,
  TextareaAutosize,
  CircularProgress,
  Button, 
  ListItemText} from '@mui/material';

import { withStyles } from '@mui/styles';

import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';
import { AddTweetForm } from '../components/AddTweetForm';
import { SearchTextField } from '../components/SearchTextField';



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
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
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
    display: 'flex',
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
    marginRight: 10,
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
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA !important',
    // box-shadow: 0px 1px 3px 0px grey, 0px 4px 8px 3px grey, 0px 1px 6px 2px grey;
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    backgroundColor: 'transparent',
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: 'edf3f6',
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: 'E6ECF0 !important',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute !important',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },

}));


export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes}/>
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant='outlined' >
            <Paper className={classes.tweetsHeader} variant='outlined' >
              <Typography variant='h6' >Главная</Typography>
            </Paper>
            <Paper>
              <AddTweetForm classes={classes}/>
            </Paper>
            <div className={classes.addFormBottomLine} />
            {[
              ...new Array(20).fill(
                <Tweet
                user={{
                  fullname: '@nikFullName',
                  username: 'nikName',
                  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/KCon_2017_LA_Girl%27s_Day.jpg/1920px-KCon_2017_LA_Girl%27s_Day.jpg',
                }}
                text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex ratione sint perspiciatis. Reiciendis, consectetur. Voluptas suscipit non vero eos ratione, asperiores, incidunt consequatur commodi necessitatibus ut recusandae rerum fugit.' }
                classes={classes} />,
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide} >
            <SearchTextField
              placeholder='Поиск по Твиттеру'
              variant='outlined'
              inputProps={{
                startAdornment: (
                  <InputAdornment position='start' >
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                  primary="Санкт-Петербург"
                  secondary={
                    <Typography component='span' variant='body2'>
                      Твитов: 3 331
                    </Typography>
                  }
                />
                </ListItem>
                <Divider component='li' />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#коронавирус"
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: 163 122
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component='li' />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Беларусь"
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: 13 554
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component='li' />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt='Remy Name'
                      src='https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-19.jpg?resize=566%2C795&ssl=1'
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary='Dock of paper'
                    secondary={
                      <Typography component='span' variant='body2'>
                        @FavDockOfPaper
                      </Typography>
                    }/>
                </ListItem>
                <Button color='primary'>
                  <PersonAddIcon/>
                </Button>
                <Divider component='li' />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
