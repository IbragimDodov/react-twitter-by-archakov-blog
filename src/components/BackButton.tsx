import React from 'react';
import { IconButton } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useHistory } from 'react-router-dom';

export const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const handleClickButton = () => {
    history.goBack();
  };

  return (
    <IconButton onClick={handleClickButton} style={{marginRight: 20}} color='primary'>
      <BackspaceIcon/>
    </IconButton>
  )
}
