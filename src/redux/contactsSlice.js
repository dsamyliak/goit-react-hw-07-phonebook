import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null, // filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   createContact(state, action) {
  //     state.items.push(action.payload);
  //     localStorage.setItem('contacts', JSON.stringify(state.items));
  //   },
  //   deleteContact(state, action) {
  //     state.items = state.items.filter(item => item.id !== action.payload);
  //     localStorage.setItem('contacts', JSON.stringify(state.items));
  //   },
  //   filterContact(state, action) {
  //     state.filter = action.payload;
  //   },
  //   updateLocalStorage(state, action) {
  //     state.items = action.payload;
  //   },
  // },
});

// export const {
//   createContact,
//   deleteContact,
//   filterContact,
//   updateLocalStorage,
// } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
