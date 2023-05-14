// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newspapaerAPI from '../../apis/news';

// initial state
const initialState = {
    news: [],
    newsupdated: false
};

export const loadNews = createAsyncThunk(
    '/news/fetchAll',
    async (thunkAPI) => {
        const response = await newspapaerAPI.fetchNews();
        return response.data;
      }
)



// ==============================|| SLICE - MENU ||============================== //

const news = createSlice({
    name: 'news',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loadNews.fulfilled, (state, action) => {
          // Add news data to state
          state.news = action.payload
        });
      },
});

export default news.reducer;

// export const { loadNews } = news.actions;
