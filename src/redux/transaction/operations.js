import { createAsyncThunk } from '@reduxjs/toolkit';
import { fullUserInfoAPI } from '../../api/apiAuth';
import {
  addTransactionAPI,
  getTransactionsAPI,
  updateBalanceAPI,
  deleteTransactionAPI,
} from '../../api/apiTransaction.js';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (type, thunkAPI) => {
    try {
      const data = await getTransactionsAPI({ type });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Failed to fetch transactions' });
    }
  }
);

export const addNewTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async ({ type, body }, thunkAPI) => {
    try {
      const data = await addTransactionAPI({ type, body });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Failed to add transaction' });
    }
  }
);
// Update balance Thunk
export const updateBalance = createAsyncThunk(
  'transactions/updateBalance',
  async (value, thunkAPI) => {
    try {
      const data = await updateBalanceAPI(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Refresh user Thunk
export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const data = await fullUserInfoAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Delete transaction Thunk
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const { newBalance } = await deleteTransactionAPI(id);
      return { newBalance, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);