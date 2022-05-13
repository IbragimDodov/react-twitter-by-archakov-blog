import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography, IconButton } from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListIcon from '@mui/icons-material/ListAltOutlined';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import { makeStyles } from '@mui/styles';



const useHomeStyles = makeStyles(() => ({
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center',
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
}));

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <section>
      <Grid container spacing={1}>
        <Grid item xs>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label='' color='primary'>
                <TwitterIcon />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <NotificationIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <MessageIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <BookmarkIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <ListIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <UserIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
            </li>
          </ul>
          
        </Grid>
        <Grid item xs={7}>
          111
        </Grid>
        <Grid item xs={4}>
          111
        </Grid>
      </Grid>
    </section>
  )
}
