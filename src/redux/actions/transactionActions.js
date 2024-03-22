import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTransactionAPI, updateBalanceAPI , getBalanceAPI} from '../../api/apiTransaction';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async ({ type, body, token }) => { // Dodajemy token jako argument
    try {
      const response = await addTransactionAPI({ type, body, token }); // Przekazujemy token do API
      return { transaction: response.data.transaction, newBalance: response.data.newBalance };
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
);
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
  export const getBalance = createAsyncThunk(
    'balance/fetchBalance',
    async (_, thunkAPI) => {
      try {
        const data = await getBalanceAPI();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  