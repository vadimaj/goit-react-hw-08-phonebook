import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contactsOperations';

export const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => action.payload,
});

export const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});
export const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (state, action) => action.payload,
  [fetchContacts.pending]: () => null,
});
