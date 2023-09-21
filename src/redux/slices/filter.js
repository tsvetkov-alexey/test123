import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  page: 1,
  currentType: {
    name: 'All',
  },
  currentTag: {
    name: 'All',
  },
};

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setCurrentTag(state, action) {
      state.currentTag.name = action.payload;
    },
    setCurrentType(state, action) {
      state.currentType.name = action.payload;
    },
  },
});

export const { setSearch, setPage, setCurrentTag, setCurrentType } = filter.actions;
export default filter.reducer;
