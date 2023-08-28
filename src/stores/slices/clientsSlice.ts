import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Callbacks } from '../types';
import { Client, ClientsState } from '../types/clientTypes';

const initialState = {
  clients: [] as Client[],
};

const reducers = {
  getClients: (state: ClientsState, action: PayloadAction<{name: string} & Callbacks>) => (
    {...state, action}
  ),
  setClients: (state: ClientsState, action: PayloadAction<Client[]>) => {
    state.clients = action.payload;
  },
  addClient: (state: ClientsState, action: PayloadAction<Client & Callbacks>) => (
    {...state, action}
  ),
  removeClient: (state: ClientsState, action: PayloadAction<{id: number} & Callbacks>) => (
    {...state, action}
  ),
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers,
});

export default clientSlice.actions;

export const clientReducer = clientSlice.reducer;
