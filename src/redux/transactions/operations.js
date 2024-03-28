import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-app-eafad5d610ef.herokuapp.com";

export const getTransaction = createAsyncThunk(
  "transactions/getTransaction",
  async (type, thunkAPI) => {
    try {
      const response = await axios.get(`/api/transactions/${type}`);
      return response.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (body, thunkAPI) => {
    const { type, ...rest } = body;
    const sendBody = {
      ...rest,
    };
    try {
      console.log(sendBody);

      const response = await axios.post(`/api/transactions/${type}`, sendBody);
      console.log(response.data.data.transaction);
      return response.data.data.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  "transactions/removeTransaction",
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/transactions/${_id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
