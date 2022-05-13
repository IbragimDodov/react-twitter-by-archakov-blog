// @ts-nocheck


import React, { useState } from "react";
import { Typography,
  Button,
  FormControl,
  FormGroup,
  TextField,
  Theme,
} from "@mui/material";


import { createStyles, makeStyles } from '@mui/styles';
// import { styled } from "@mui/styles";
// import { styled } from '@mui/material/styles';


import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import { ModalBlock } from "../components/ModalBlock";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '59%',
    top: '59%',
    transform: 'translate(-50%, -50%)',
    width: '350% !important',
    height: '350% !important',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 30,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 10,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  }, 
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  // loginSideField: {
  //   marginBottom: 18,
  // },
  // registerField: {
  //   marginBottom: theme.spacing(5),
  // },
  // loginFormControl: {
  //   marginBottom: theme.spacing(2),`
  // },
}));


export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signOut'>();
  
  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
      <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6" >
              <SearchIcon className={classes.blueSideListInfoIcon}/>
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6" >
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>
              Узнайте, о чем говорят в мире.
            </Typography> 
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6" >
              <ChatBubbleOutlineOutlinedIcon className={classes.blueSideListInfoIcon}/>
              Присоединяйтесь к общению.
            </Typography> 
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper} >
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography className={classes.loginSideTitle} variant="h4" >Узнайте, что происходит в мире прямо сейчас.</Typography>
          <Typography><b>Присоединяйтесь к твиттеру прямо сейчас!</b></Typography>
          <br/>
          <Button onClick={handleClickOpenSignUp} style={{marginBottom: '10px'}} variant="contained" color="primary" fullWidth >Зарегистрироваться</Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth >Войти</Button>

          {/* <Button variant="outlined" color="primary" >Открыть настройки</Button> */}
          <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal} classes={classes} title="Войти в аккаунт">
            <FormControl
              sx={{marginBottom: '2px'}}
              // className={classes.loginFormControl}
              component="fieldset"
              fullWidth >
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{marginBottom: '5px'}}
                  // className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  sx={{marginBottom: '18px'}}
                  // className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth >Войти</Button>
                <br/>
                <br/>
              </FormGroup>
            </FormControl>
          </ModalBlock>

          <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal} classes={classes} title="Создайте учетную запись">
            <FormControl
              sx={{marginBottom: '2px'}}
              // className={classes.loginFormControl}
              component="fieldset"
              fullWidth >
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{marginBottom: '5px'}}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  sx={{marginBottom: '5px'}}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  sx={{marginBottom: '5px'}}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth >Далее</Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};

// export default useStylesSignIn;
// export default SignIn;