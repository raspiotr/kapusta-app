import  {combineReducers}  from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import balanceReducer from './reducers/balanceReducer';
import reportsQueryReducer from './reducers/reportsQuery.reducer';
import calendarReducer from './reducers/calendarReducer';
import reportsReducer from './reducers/reportsReducer';
import { transactionReducer } from './reducers/transactionReducer';

const rootReducer = combineReducers({
  transaction: transactionReducer,
  balance: balanceReducer,
  reportsQuery: reportsQueryReducer,
  calendar: calendarReducer,
  reports: reportsReducer
});


// Apply thunk middleware
const store = configureStore({
  reducer: rootReducer,
  
});

export default store;
