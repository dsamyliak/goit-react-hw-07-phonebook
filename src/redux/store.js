import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userSlice } from './userSlice';
import { contactsSlice } from './contactsSlice';

//Store
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    contacts: contactsSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
