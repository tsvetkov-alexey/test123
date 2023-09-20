import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState = {
  info: [],
  status: 'LOADING',
};

export const fetchInfo = createAsyncThunk('info/fetchInfo', async (params) => {
  const { search, page, currentTag, currentType } = params;
  const { data } = await axios.get(
    `/PC?name=${search}&tags=${currentTag}&type=${currentType}&page=${page}&limit=5`,
  );
  return data;
});

export const info = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state) => {
        state.status = 'LOADING';
        state.info = [];
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.status = 'SUCCESS';
        state.info = action.payload;
      })
      .addCase(fetchInfo.rejected, (state) => {
        state.status = 'ERROR';
        state.info = [];
      });
  },
});

export default info.reducer;
