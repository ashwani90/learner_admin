// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import logsAPI from '../../apis/logs';

// initial state
const initialState = {
    logs: []
};

export const loadLogs = createAsyncThunk(
    '/logs/fetchAll',
    async (thunkAPI) => {
        const response = await logsAPI.fetchLog();
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
          // Add user to the state array
          state.logs = action.payload
        })
      },
});

export default logs.reducer;

// export const { loadLogs } = logs.actions;
