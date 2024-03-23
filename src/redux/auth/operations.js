import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import Notiflix from "notiflix";

axios.defaults.baseURL = "https://kapusta-backend-827563b0830f.herokuapp.com";

const setAuthorizationToken = (token) => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};

export const register = createAsyncThunk(
  "/api/auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/register", credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "/api/auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/login", credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "/api/auth/logout",
  async (_, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/logout");
      setAuthorizationToken("");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "/api/auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthorizationToken(token);
      const res = await axios.get("/api/auth/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
