import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

const rootReducer = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
