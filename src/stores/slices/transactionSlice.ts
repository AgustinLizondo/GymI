import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  Transaction,
  TransactionState,
} from '../types/transactionTypes';
import { Callbacks } from '../types';

const initialState = {
  transactions: [] as Transaction[],
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
