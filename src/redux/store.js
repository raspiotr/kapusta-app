import { createStore, combineReducers } from 'redux';
import balanceReducer from './reducers/balanceReducer';
import reportsQueryReducer from './reducers/reportsQuery.reducer';
import calendarReducer from './reducers/calendarReducer';
import reportsReducer from './reducers/reportsReducer';

const rootReducer = combineReducers({
  balance: balanceReducer,
  reportsQuery: reportsQueryReducer,
  calendar: calendarReducer,
  reports: reportsReducer
});

const store = createStore(rootReducer);

export default store;