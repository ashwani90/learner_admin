// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import logsAPI from '../../apis/logs';

// initial state
const initialState = {
    logs: [],
    logsCreated: false,
    types: [],
    categories: []
};

export const loadLogs = createAsyncThunk(
    '/logs/fetchAll',
    async (thunkAPI) => {
        const response = await logsAPI.fetchLog();
        return response.data;
      }
)

export const loadCategories = createAsyncThunk(
    '/category/fetchAll',
    async (thunkAPI) => {
        const response = await logsAPI.fetchCategory();
        return response.data;
      }
)

export const loadTypes = createAsyncThunk(
    '/type/fetchAll',
    async (thunkAPI) => {
        const response = await logsAPI.fetchType();
        return response.data;
      }
)

export const createLogs = createAsyncThunk(
    '/logs/create',
    async (data, thunkAPI) => {
        const response = await logsAPI.createLog(data);
        return response.data;
      }
)

// ==============================|| SLICE - MENU ||============================== //

const logs = createSlice({
    name: 'logs',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loadLogs.fulfilled, (state, action) => {
          // Add logs data to state
          state.logs = action.payload
        });
        builder.addCase(createLogs.fulfilled, (state, action) => {
            // Add status to state
            state.logsCreated = true
          });
          builder.addCase(loadTypes.fulfilled, (state, action) => {
            // Add types to state
            state.types = action.payload
          });
          builder.addCase(loadCategories.fulfilled, (state, action) => {
            // Add categories to state
            state.categories = action.payload
          });
      },
});

export default logs.reducer;

// export const { loadLogs } = logs.actions;
