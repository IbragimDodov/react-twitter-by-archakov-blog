import React from 'react'

import classNames from 'classnames'

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TextLimitProgress from '@mui/icons-material/TextSnippetOutlined';

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

import { useHomeStyles } from '../pages/Home/Home';
import { kMaxLength } from 'buffer';

// const theme = createTheme();

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>('');
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const maxLength = 281 - text.length;

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget && text.length <= 280) {
      setText(e.currentTarget.value)
    } 
  }

  const handleClickAddTweet = (): void => {
    setText('');
  };


  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-8Yfb8rk_qzd6dxIkEyVwA0vLAgqI_hJyHlgC8M2j_gwGCIMs0jgn6sApygyN8vIJik&usqp=CAU"
          />

        <TextareaAutosize
          onChange={handleChangeTextArea}
          maxRows={maxRows}
          value={text}
          className={classes.addFormTextarea}
          placeholder="что происходит?" />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color='primary' >
            <ImageOutlinedIcon style={{fontSize: 26}} />
          </IconButton>
          <IconButton color='primary' >
            <EmojiIcon style={{fontSize: 26}} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{maxLength}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={4}
                  style={maxLength <= 100 ? {color: 'red'} : undefined}
                  value={textLimitPercent} />
                <CircularProgress
                  style={{color: 'rgba(0, 0, 0, 0.1)'}}
                  variant='determinate'
                  size={20}
                  thickness={4}
                  value={100} />

              </div>
            </>
          )}
          <Button onClick={handleClickAddTweet} disabled={text.length >= 280} color='primary' variant="contained" >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  )
}
