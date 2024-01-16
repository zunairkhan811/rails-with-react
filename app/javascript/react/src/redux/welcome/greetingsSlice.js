import { createSlice } from '@reduxjs/toolkit';
import fetchData from './fetchAPi';

const initialState = {
  data: "",
  isSuccess: false,
  message: '',
  loading: false,
};

const messageLists = createSlice({
  name: 'MessageList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        // console.log(action.payload)
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false;
        state.isSuccess = false;
      })
  },
});

export default messageLists.reducer;
