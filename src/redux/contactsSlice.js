import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    createContact(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
    updateLocalStorage(state, action) {
      state.items = action.payload;
    },
  },
});

export const {
  createContact,
  deleteContact,
  filterContact,
  updateLocalStorage,
} = contactsSlice.actions;
