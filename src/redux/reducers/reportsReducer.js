import { createSlice } from '@reduxjs/toolkit';
import { fetchReportsData } from '../actions/reportsActions';

const initialState = {
  reports: [],
  loading: false,
  error: null,
};

const reportsReducer = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReportsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReportsData.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(fetchReportsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectReports = (state) => state.reports.reports;
export const selectReportsLoading = (state) => state.reports.loading;
export const selectReportsError = (state) => state.reports.error;

export default reportsReducer.reducer;