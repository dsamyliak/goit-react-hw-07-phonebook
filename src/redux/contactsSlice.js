import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null, // filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.payload,
      };
    },
    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: null,
        // state.items.push(action.payload),
        items: [...state.items, action.payload],
      };
    },
    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [deleteContact.pending]: state => {
      return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [
          // ...state.items.splice(
          //   state.items.findIndex(contact => contact.id === action.payload.id),
          //   1
          // ),
        ],
      };
    },
    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
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
