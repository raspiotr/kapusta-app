// actions/reportsActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodDataAPI } from '../../api/apiTransaction';

export const fetchReportsData = createAsyncThunk(
  'reports/fetchReportsData',
  async ({ transactionType, body, token }) => {
    try {
      const result = await getPeriodDataAPI({ transactionType, token, body });
      return result;
    } catch (error) {
      throw new Error('Błąd pobierania danych z API:', error.message);
    }
  }
);
