import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import items from './slices/itemsSlice';
import cart from './slices/cartSlice';
import favorites from './slices/favoritesSlice';

export const store = configureStore({
  reducer: { filter, items, cart, favorites },
});
