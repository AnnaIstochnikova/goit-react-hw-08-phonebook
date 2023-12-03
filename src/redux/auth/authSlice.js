import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,

  //?????
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, state => initialState);
  },
});

export const authReducer = authSlice.reducer;
