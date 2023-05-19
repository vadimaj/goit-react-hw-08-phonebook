import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const contact = await contactsAPI.addContact(newContact);
    return contact;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    const removedContactId = await contactsAPI.removeContact(contactId);
    return removedContactId;
  }
);
