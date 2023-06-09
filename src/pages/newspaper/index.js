import React, {useEffect} from 'react';
import { Grid } from '@mui/material';
import NewsItem from './newsItem';
import { useDispatch, useSelector } from 'react-redux';


const Newspaper = () => {

    const newsSt = useSelector((state) => state.news);
    const dispatch = useDispatch();
    console.log(newsSt);

    useEffect(() => {
        // dispatch(loadNews());
    }, [])

    return (
        <Grid container rowSpacing={2} columnSpacing={2.5} sx={{backgroundColor:'#f9f7f1', color: '#404040'}}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </Grid>
                );
}

export default Newspaper;