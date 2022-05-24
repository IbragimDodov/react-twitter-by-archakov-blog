import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';

import {
  List,
  ListItem,
  Divider,
  Typography,
  Paper,
  ListItemText} from '@mui/material';

import { useHomeStyles } from '../pages/Home/Home';
import { TagsState } from '../store/ducks/tags/contracts/state';
import { Link} from 'react-router-dom';

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({ classes}: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if (!isLoaded) {
    return null;
  }

  return isLoaded && (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader}>
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {
          items.map((obj) => (
            <React.Fragment key={obj._id}>
              <ListItem className={classes.rightSideBlockItem}>
                <Link to={`/home/search?q=${obj.name}`}>
                  <ListItemText
                    primary={obj.name}
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: {obj.count}
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
              <Divider component='li' />
          </React.Fragment>))
        }
      </List>
    </Paper>
  )
}
