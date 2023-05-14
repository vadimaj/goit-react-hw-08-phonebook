import { createSlice } from '@reduxjs/toolkit';
export const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
