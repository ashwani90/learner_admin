import React from 'react';
import { Grid, Button } from '@mui/material';
import BlogItem from '../home/blogItem';
import Search from 'layout/MainLayout/Header/HeaderContent/Search';
import AddDocForm from './addDocForm';

// Same item should be able to perform differently for different props
const Docs = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Grid container>
            <Grid container columnSpacing={2.5}  ml={2}>
                <Grid item>
                <Search />
                </Grid>
                <Grid item mt={0.5}>
                <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }} onClick={handleOpen}>
                           Search
                        </Button>
                        </Grid>
                <Grid item mt={0.5}>
                <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }} onClick={handleOpen}>
                            Add Doc
                        </Button>
                        </Grid>
            </Grid>
            <Grid container mt={4}>
                <Grid item>
                    <AddDocForm open={open} handleClose={handleClose}/>
                </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={2.5}>
            
            <BlogItem md={3} sx={6} xs={6} lg={3}/>
            <BlogItem md={3} sx={6} xs={6} lg={3}/>
            <BlogItem md={3} sx={6} xs={6} lg={3}/>
            <BlogItem md={3} sx={6} xs={6} lg={3}/>
            </Grid>
        </Grid>
        
                );
}

export default Docs;