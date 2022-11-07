import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    password: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
    //   state.isLoggedIn = true;
      if (action.payload === '') {
          state.isLoggedIn = false;
          alert("Enter login, please");
          
      } else {
        state.isLoggedIn = true;
      }
    },
    logPassword(state, action) {
        state.password = action.payload;
        // state.isLoggedIn = true;
        if (action.payload === '') {
            state.isLoggedIn = false;
            alert("Enter password, please");
        } else {
            if( state.login !== '' ){ 
                state.isLoggedIn = true;
        }
      }
    },
    logOut(state) {
      state.login = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut, logPassword } = userSlice.actions;
