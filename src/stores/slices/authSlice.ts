import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, LogIn } from '../types/authTypes';

const initialState = {
  isUserLogged: false,
};

const reducers = {
  logIn: (state: AuthState, action: PayloadAction<LogIn>) => (
    {...state, action}
  ),
  setIsUserLogged: (state: AuthState, action: PayloadAction<boolean>) => {
    state.isUserLogged = action.payload;
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export default authSlice.actions;

export const authReducer = authSlice.reducer;
