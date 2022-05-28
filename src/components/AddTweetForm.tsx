import React from 'react';

import classNames from 'classnames';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

import {
  IconButton,
  Avatar,
  TextareaAutosize,
  CircularProgress,
  Button} from '@mui/material';
  import { Alert } from '@mui/material';

import Snackbar from '@mui/material/Snackbar';

import { useHomeStyles } from '../pages/Home/Home';
import { useDispatch } from 'react-redux';
import { fetchAddTweet } from '../store/ducks/tweets/actionsCreators';
import { useSelector } from 'react-redux';
import { selectAddFormtate } from '../store/ducks/tweets/selectors';
import { AddFormState } from '../store/ducks/tweets/contracts/state';


// const theme = createTheme();

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const addFormState = useSelector(selectAddFormtate);
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const maxLength = 281 - text.length;


  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget && text.length <= 280) {
      setText(e.currentTarget.value);
    } 
  }

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
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
          <Button
            onClick={handleClickAddTweet}
            disabled={addFormState === AddFormState.LOADING || !text || text.length >= 280}
            color='primary'
            variant="contained">
            {addFormState === AddFormState.LOADING ? (<CircularProgress  color='inherit' size={16} />) : ('Твитнуть')}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (<Alert severity='error'>Ошибка при добавлении твита</Alert>)}
    </div>
  )
}
