import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItemsStatus', async (params) => {
  const { category, search, sortBy, order } = params;
  const { data } = await axios.get(
    `https://63d371c7c1ba499e54c15bfd.mockapi.io/items?&${category}&${search}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = itemsSlice.actions;

export const selectItems = (state) => state.items;

export default itemsSlice.reducer;
