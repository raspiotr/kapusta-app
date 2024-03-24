import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  updateBalance,
} from "./operations";
import Notiflix from "notiflix";

const setCommonState = (state, action) => {
  state.isLoggedIn = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.user.balance = action.payload.user.balance;
  state.user.avatarUrl = action.payload.user.avatarUrl;
  state.token = action.payload.token;
  Notiflix.Notify.success("Hooray! You have successfully logged in.", {
    position: "center-top",
    timeout: 8000,
  });
};

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null, balance: 0, avatarUrl: "" },
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(state, action) {
      const { token, name, email, balance, avatarUrl } = action.payload;
      state.isLoggedIn = true;
      state.user.name = name;
      state.user.email = email;
      state.user.balance = balance;
      state.user.avatarUrl = avatarUrl;
      state.token = token;
      Notiflix.Notify.success("Hooray! You have successfully logged in.", {
        position: "center-top",
        timeout: 8000,
      });
    },
    setNewBalance(state, action) {
      const { balance } = action.payload;
      state.user.balance = balance;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, setCommonState);
    builder.addCase(register.rejected, () => {
      Notiflix.Notify.failure(
        "User with the provided email address is already registered. Please log in.",
        {
          position: "center-top",
          timeout: 8000,
        }
      );
    });

    builder.addCase(login.fulfilled, setCommonState);
    builder.addCase(login.rejected, () => {
      Notiflix.Notify.failure("Login failed! Wrong email or password.", {
        position: "center-top",
        timeout: 8000,
      });
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = { name: null, email: null, balance: 0, avatarUrl: "" };
      state.token = null;
      state.isLoggedIn = false;
      Notiflix.Notify.info("You have logged out.", {
        position: "center-top",
        timeout: 8000,
      });
    });

    builder.addCase(updateBalance.fulfilled, (state, action) => {
      state.user.balance = action.payload.balance;
      Notiflix.Notify.info("Balance updated.", {
        position: "center-top",
        timeout: 8000,
      });
    });

    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.balance = action.payload.user.balance;
      state.user.avatarUrl = action.payload.user.avatarUrl;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { setUserData, setNewBalance } = authSlice.actions;
