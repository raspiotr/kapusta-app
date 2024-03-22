import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, logIn } from '../auth/operations';
import { addTransactionAPI, getTransactionsAPI } from '../../api/apiTransaction.js';

const initialState = {
  newBalance: 0,
  isLoading: false,
  error: null,
  transactions: [],
};

export const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    updateAuthBalance: (state, action) => {
      state.newBalance = action.payload;
    },
    newTransaction: (state, action) => {
      state.transactions.push(action.payload); // Dodawanie nowej transakcji do tablicy
    },
  },
  extraReducers: builder => {
    builder
      // Add Transaction
      .addCase(addTransactionAPI.pending, handlePending)
      .addCase(addTransactionAPI.fulfilled, (state, action) => {
        console.log("Dane transakcji z API:", action.payload.transaction);
        state.newBalance = action.payload.newBalance;
        state.transactions.push(action.payload.transaction);
        state.isLoading = false;
      })
      .addCase(addTransactionAPI.rejected, handleRejected)
      // Get Transactions
      .addCase(getTransactionsAPI.pending, handlePending)
      .addCase(getTransactionsAPI.fulfilled, (state, action) => {
        state.transactions = action.payload.transactions;
        state.isLoading = false;
      })
      .addCase(getTransactionsAPI.rejected, handleRejected)
      // Refresh user
      .addCase(refreshUser.fulfilled, (state, action) => {
        const { balance, transactions } = action.payload;
        state.newBalance = balance;
        state.transactions = transactions;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, handleRejected)
      // Login
      .addCase(logIn.fulfilled, (state, action) => {
        state.newBalance = action.payload.userData.balance;
      })
      .addCase(logIn.rejected, handleRejected);
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { updateAuthBalance, newTransaction  } = transactionsSlice.actions;
