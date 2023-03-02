import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  searchValue: '',
  sort: { name: 'rating', sortProperty: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setSearchValue, setSort } = filterSlice.actions;

export const selectFilter = (state) => state.filter;

export default filterSlice.reducer;
