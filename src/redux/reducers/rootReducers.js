import { combineReducers } from 'redux';
import balanceReducer from './reducers/balanceReducer';
import reportsQueryReducer from './reducers/reportsQuery.reducer';
import calendarReducer from './reducers/calendarReducer'; // Dodaj import dla calendarReducer
import reportsReducer from './reducers/reportsReducer'; // Dodaj import dla reportsReducer

const rootReducer = combineReducers({
  balance: balanceReducer,
  reportsQuery: reportsQueryReducer,
  calendar: calendarReducer,
  reports: reportsReducer, // Dodaj reducer dla kalendarza
});

export default rootReducer;
