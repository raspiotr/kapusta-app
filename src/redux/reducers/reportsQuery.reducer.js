
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredData: [],
};

const reportsQuerySlice = createSlice({
  name: 'reportsQuery',
  initialState,
  reducers: {
    filteredDataAction: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { filteredDataAction } = reportsQuerySlice.actions;
export default reportsQuerySlice.reducer;