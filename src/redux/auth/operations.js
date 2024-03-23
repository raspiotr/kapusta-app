import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://kapusta-backend-827563b0830f.herokuapp.com/";


const setAuthorizationToken = (token) => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};

setAuthorizationToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmVkNTJjMzYxMjE0NDViMmRkNDI0OSIsImlhdCI6MTcxMTE5OTUzMiwiZXhwIjoxNzExODA0MzMyfQ.yrelo4Nez6BawmYgKWYzUJpQHNHJCO9Jp80KRJCAplU");


// email: 'bg@bg.com';
// name: 'bgtest23';

export const register = createAsyncThunk(
  "/users/signup",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "/users/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    const res = await axios.post("/users/logout");
    setAuthorizationToken("");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "/users/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthorizationToken(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
