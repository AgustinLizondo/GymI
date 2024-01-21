import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  Transaction,
  TransactionState,
} from '../types/transactionTypes';
import { Callbacks } from '../types';

const initialState = {
  transactions: [] as Transaction[],
  grossRevenue: 0.00,
  chargedSubscriptions: 0,
  totalClients: 0,
};

const reducers = {
  getTransactions: (state: TransactionState, action: PayloadAction<Callbacks>) => (
    {...state, action}
  ),
  setTransactions: (state: TransactionState, action: PayloadAction<Transaction[]>) => {
    state.transactions = action.payload;
  },
  addTransaction: (state: TransactionState, action: PayloadAction<
      Pick<Transaction, "clients" | "transactionAmount"> & Callbacks>,
  ) => (
    {...state, action}
  ),
  getRevenue: (state: TransactionState, action: PayloadAction<Callbacks>) => (
    {...state, action}
  ),
  setRevenue: (state: TransactionState, action: PayloadAction<number>) => {
    state.grossRevenue = action.payload;
  },
  setTotalClients: (state: TransactionState, action: PayloadAction<number>) => {
    state.totalClients = action.payload;
  },
  setChargedSubscriptions: (state: TransactionState, action: PayloadAction<number>) => {
    state.chargedSubscriptions = action.payload;
  },
  removeTransaction: (state: TransactionState, action: PayloadAction<{id: number} & Callbacks>) => (
    {...state, action}
  ),
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers,
});

export default transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
