import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, SignIn } from '../types/authTypes';
import { Callbacks } from '../types';

const initialState = {
  isUserLogged: false,
};

const reducers = {
  signIn: (state: AuthState, action: PayloadAction<SignIn>) => (
    {...state, action}
  ),
  signOut: (state: AuthState, action: PayloadAction<Callbacks>) => (
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
