import React from 'react';
import { Grid } from '@mui/material';
import avatar1 from 'assets/images/users/avatar-1.png';

const ImageItem = () => {
    return (
        <Grid container justifyContent="space-between" alignItems="center">
                        <img
        src={avatar1}
        height='300'
        width="100%"
        alt={"title"}
        loading="lazy"
      />
                        </Grid>
    )
}

export default ImageItem;