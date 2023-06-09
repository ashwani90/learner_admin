import React from 'react';
import MainCard from 'components/MainCard';
import Switch from '@mui/material/Switch';
import { Grid,Stack, Typography, Paper } from '../../../node_modules/@mui/material/index';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const StyledDiv = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '17px'
}));

const Batch = ({xs=12,sm=12,md=6,lg=6, handleEdit, ...props}) => {
    return (
        <StyledDiv>
        <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon sx={{fontSize: 'medium'}} />
      </IconButton>
      <IconButton aria-label="delete" color="primary">
        <EditIcon sx={{fontSize: 'medium'}} onClick={handleEdit} />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <RefreshIcon sx={{fontSize: 'medium'}} />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AlignHorizontalLeftIcon sx={{fontSize: 'medium'}} />
      </IconButton>
    </Stack>
        </StyledDiv>
    );
}

export default Batch;
