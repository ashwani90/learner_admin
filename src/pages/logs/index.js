import React, { useDebugValue, useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import BlogItem from '../home/blogItem';
import Search from 'layout/MainLayout/Header/HeaderContent/Search';
import AddLogForm from './addLogForm';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories, loadLogs, loadTypes } from 'store/reducers/logs';

const formModel = [
    {
        'label': 'Description*',
        'id': 'description',
        'name': 'description',
        'type': "text",
        'placeholder': 'Description',
        'key': 'description',
        'helper_error_id': 'helper-text-description'
    },
    {
        'label': 'Time Spent*',
        'id': 'time_spent',
        'name': 'time_spent',
        'type': "text",
        'placeholder': 'Time Spent',
        'key': 'time_spent',
        'helper_error_id': 'helper-text-time'
    },
    {
        'type': "autocomplete",
        'id': "category",
        "data": "categories",
        "label": "Category",
        'name': 'category',
        'placeholder': 'Category',
        'key': 'category',
        'helper_error_id': 'helper-text-category'
    },
    {
        'type': "autocomplete",
        'id': "type",
        "data": "types",
        "label": "Type",
        'name': 'type',
        'placeholder': 'Type',
        'key': 'type',
        'helper_error_id': 'helper-text-type'
    }
]


// Same item should be able to perform differently for different props
const Logs = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const logsSt = useSelector((state) => state.logs);
    const dispatch = useDispatch();
    console.log(logsSt);
    let categories = logsSt.categories;
    let types = logsSt.types;
    

    useEffect(() => {
        dispatch(loadLogs());
        dispatch(loadCategories());
        dispatch(loadTypes());
    }, [])

    return (
        <Grid container>
            <Grid container columnSpacing={2.5}  ml={2}>
                <Grid item>
                <Search />
                </Grid>
                <Grid item mt={0.5}>
                <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                           Search
                        </Button>
                        </Grid>
                <Grid item mt={0.5}>
                <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }} onClick={handleOpen}>
                            Add Log
                        </Button>
                        </Grid>
            </Grid>
            <Grid container mt={4}>
                <Grid item>
                    <AddLogForm categories={categories} types={types} formModel={formModel} open={open} handleClose={handleClose}/>
                </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={2.5}>
            { logsSt.logs.map((item,index) => {
                return (
                    <BlogItem key={index} item={item} isImagePresent={false} md={4} sx={6} xs={6} lg={4}/>
                );
            }) }
            
            </Grid>
        </Grid>
        
                );
}

export default Logs;