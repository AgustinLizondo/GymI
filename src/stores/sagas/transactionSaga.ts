import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import transactionActions from '../slices/transactionSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from '../types/transactionTypes';
import {
  addTransaction as addTransactionService,
  getTransactions as getTransactionsService,
  removeTransaction as removeTransactionService,
  getRevenue as getRevenueService,
} from '../../services/transaction';
import { Callbacks } from '../types';

function* getTransactions(action: PayloadAction<Callbacks>) {

  const {
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    const { data } = yield call(getTransactionsService);
    yield put(transactionActions.setTransactions(data || []));

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* getRevenue(action: PayloadAction<Callbacks>) {

  const {
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    const { data } = yield call(getRevenueService);
    console.log(data, 'data');
    const totalClients = new Set(
      data.map((transaction: { client_id: string }) => transaction.client_id),
    );
    const totalRevenue = data.reduce((
      sum: number,
      transaction: { transaction_amount: number },
    ) => sum + transaction.transaction_amount, 0);
    yield put(transactionActions.setRevenue(totalRevenue));
    yield put(transactionActions.setTotalClients(totalClients.size));
    yield put(transactionActions.setChargedSubscriptions(data.length));

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* addTransaction(action: PayloadAction<
  Pick<Transaction, "clients" | "transactionAmount"> & Callbacks>) {
  const {
    clients,
    transactionAmount,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    yield call(addTransactionService, {
      clients,
      transactionAmount,
    });

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* removeTransaction(action: PayloadAction<{ id: number } & Callbacks>) {

  const {
    id,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    //yield put(commonsActions.setIsLoading(true));

    yield call(removeTransactionService, id);

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    //yield put(commonsActions.setIsLoading(false));
  }
}

function* transactionSaga() {
  yield takeEvery(transactionActions.getTransactions, getTransactions);
  yield takeEvery(transactionActions.addTransaction, addTransaction);
  yield takeEvery(transactionActions.removeTransaction, removeTransaction);
  yield takeEvery(transactionActions.getRevenue, getRevenue);
}

export default transactionSaga;
