import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userSlice } from './userSlice';
// import { contactsSlice } from './contactsSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

//Store
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // contacts: contactsSlice.reducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
