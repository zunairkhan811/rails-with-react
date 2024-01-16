import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/v1/homes';
const fetchData = createAsyncThunk('homes/get', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(url);
    console.log(data)
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export default fetchData;
