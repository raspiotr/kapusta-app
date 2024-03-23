import { createSlice } from "@reduxjs/toolkit";
import {
  addTransactionAPI,
  getBalanceAPI,
  updateBalanceAPI,
} from "../../api/apiTransaction"; // Dodaj import akcji getBalanceAPI oraz updateBalanceAPI

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
  newBalance: 0,
};

export const transactionReducer = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    newTransaction: (state, action) => {
      state.transactions.push(action.payload); // Dodawanie nowej transakcji do tablicy
    },
    updateAuthBalance: (state, action) => {
      console.log("test");
      console.log(action.payload);
      state.newBalance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTransactionAPI.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTransactionAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.push(action.payload.data.transaction);
        state.newBalance = action.payload.newBalance;
        // Dodawanie nowej transakcji do tablicy po zapisie na serwerze
      })
      .addCase(addTransactionAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getBalanceAPI.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBalanceAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newBalance = action.payload.balance;
      })
      .addCase(getBalanceAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateBalanceAPI.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBalanceAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newBalance = action.payload.newBalance;
      })
      .addCase(updateBalanceAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { newTransaction, updateAuthBalance } = transactionReducer.actions;
export default transactionReducer.reducer;
