import React from 'react'
import { Typography, IconButton, Container, InputBase, Theme, Paper, Avatar, Button } from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListIcon from '@mui/icons-material/ListAltOutlined';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useHomeStyles } from './Home';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.logo} aria-label='' color='primary'>
          <TwitterIcon className={classes.logoIcon} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button className={classes.sideMenuTweetButton} variant='contained' fullWidth color='primary' >Твитнуть</Button>
      </li>
    </ul>
  )
}
