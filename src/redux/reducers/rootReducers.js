import { combineReducers } from 'redux';

import reportsQueryReducer from './reportsQuery.reducer';
import calendarReducer from './calendarReducer'; 
import reportsReducer from '.reportsReducer'; 
import {transactionReducer} from './transactionReducer';
const rootReducer = combineReducers({
  
  reportsQuery: reportsQueryReducer,
  calendar: calendarReducer,
  reports: reportsReducer, 
  transactions: transactionReducer,
});

export default rootReducer;
