import { createSlice } from '@reduxjs/toolkit';

export const getFavsFromLS = () => {
  const data = localStorage.getItem('favorites');
  const favorites = data ? JSON.parse(data) : [];

  return {
    favorites,
  };
};

const initialState = getFavsFromLS();

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    favButton(state, action) {
      const findItem = state.favorites.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        state.favorites = state.favorites.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.favorites.push(action.payload);
      }
    },
    removeFav(state, action) {
      state.favorites = state.favorites.filter((obj) => obj.id !== action.payload);
    },

    clearFavs(state) {
      state.favorites = [];
    },
  },
});

export const selectFavs = (state) => state.favorites;

export const { favButton, removeFav, clearFavs } = favoritesSlice.actions;

export default favoritesSlice.reducer;
