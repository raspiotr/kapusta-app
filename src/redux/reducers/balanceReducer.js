// balanceReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
};

export const balanceReducer = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = balanceReducer.actions;

export default balanceReducer.reducer;

  