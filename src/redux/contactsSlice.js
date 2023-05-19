import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return { ...state, items: action.payload, isLoading: false };
      })
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.pending, (state, action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(addContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(removeContact.pending, (state, action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(removeContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});
