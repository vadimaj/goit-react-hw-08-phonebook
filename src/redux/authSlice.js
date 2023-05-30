import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} from 'redux/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: true,
        };
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: true,
        };
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: { name: null, email: null },
          token: null,
          isLoggedIn: false,
        };
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
          isRefreshing: false,
        };
      })
      .addCase(refreshUser.pending, state => {
        return {
          ...state,
          isRefreshing: true,
        };
      })
      .addCase(refreshUser.rejected, state => {
        return {
          ...state,
          isRefreshing: false,
        };
      });
  },
});

export default authSlice.reducer;
