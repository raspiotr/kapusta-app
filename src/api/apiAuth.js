import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: { email: null, id: null },
  token: null,
  isLoggedIn: false,
  isLoadingCurrentUser: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAccessToken: (state, action) => {
      state.token = action.payload;
    },
  },
 // extraReducers: builder => {
   // builder
      // login
      
     // })
      // logout
      
      // refresh user
     
 // },
});

export const authReduser = authSlice.reducer;

export const { addAccessToken } = authSlice.actions;