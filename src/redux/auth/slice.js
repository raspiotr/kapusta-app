import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const setCommonState = (state, action) => {
  state.isLoggedIn = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.name;
  state.token = action.payload.token;
};

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, setCommonState);
    builder.addCase(login.fulfilled, setCommonState);
    builder.addCase(logout.fulfilled, () => initialState);
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
