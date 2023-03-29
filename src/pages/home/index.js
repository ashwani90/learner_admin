import React from 'react';
import { Grid } from '@mui/material';
import BlogItem from './blogItem';


const HomeDefault = () => {
    return (
        <Grid container rowSpacing={2} columnSpacing={2.5}>
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </Grid>
                );
}

export default HomeDefault;