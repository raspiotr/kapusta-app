import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = { status: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilterStatus(state, action) {
      return (state = { status: action.payload });
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilterStatus } = filtersSlice.actions;
