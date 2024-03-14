import { configureStore } from '@reduxjs/toolkit';


import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';



  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };
  export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig),
      transactions: '',
      reports: '',
      reportsQuery:'' ,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'your/action/type',
        ],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);