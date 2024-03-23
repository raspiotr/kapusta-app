import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addItem",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
////
// export const addTransaction = createAsyncThunk(
//   "contacts/addItem",
//   async ( body , thunkAPI) => {
//     const type = body.type
//     let sendBody = {
//       day: body.day,
//       ...
//     }
//     try {
//       const response = await axios.post(`/transaction/${type}`, { sendBody });
//       return response.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
////
/// `/transaction/${type}`, { body }

export const removeContact = createAsyncThunk(
  "contacts/removeItem",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
