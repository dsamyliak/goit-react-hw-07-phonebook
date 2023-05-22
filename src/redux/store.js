import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userSlice } from './userSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

//Store
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    logger,
    thunk,
  ],
});
