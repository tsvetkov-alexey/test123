import { configureStore } from '@reduxjs/toolkit';
import info from './slices/info';
import filter from './slices/filter';

export const store = configureStore({
  reducer: { info, filter },
});
