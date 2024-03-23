import { createSlice } from '@reduxjs/toolkit';
import {  addTransaction, removeTransaction, getTransaction, } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const tasksSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getTransaction.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.data.transactions= actions.payload
      })

      .addCase(addTransaction.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.push(actions.payload);
      })

      .addCase(removeTransaction.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transactions.filter(
          transaction => transaction.id !== actions.payload.id
        );

        state.transactions.splice(index, 1);
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase(state => {
        state.error = 'someone use old function, fix it!';
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
