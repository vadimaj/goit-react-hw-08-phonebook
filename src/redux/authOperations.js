import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contactsAPI';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const data = await contactsAPI.registerUser(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const data = await contactsAPI.loginUser(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (userData, thunkAPI) => {
    try {
      const data = await contactsAPI.logoutUser(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('An error occured');
    }
    try {
      const data = await contactsAPI.getUser(persistedToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
