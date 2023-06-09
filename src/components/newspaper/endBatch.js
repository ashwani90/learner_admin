import React from 'react';
import MainCard from 'components/MainCard';
import Switch from '@mui/material/Switch';
import { Grid,Stack, Typography, Paper } from '../../../node_modules/@mui/material/index';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

const StyledDiv = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    justifyContent: 'flex-end'
  }));

const EndBatch = ({xs=12,sm=12,md=6,lg=6, cancelClick,saveData, ...props}) => {
    return (
        <StyledDiv >
        <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" color="primary">
        <DoneIcon onClick={saveData} sx={{fontSize: 'medium'}}/>
      </IconButton>
      <IconButton aria-label="delete" color="red">
        <CloseIcon onClick={cancelClick} sx={{fontSize: 'medium'}}/>
      </IconButton>
    </Stack>
        </StyledDiv>
    );
}

export default EndBatch;
