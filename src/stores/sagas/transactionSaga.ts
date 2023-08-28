import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import transactionActions from '../slices/transactionSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Callbacks, Transaction } from '../types/transactionTypes';
import {
  addTransaction as addTransactionService,
  getTransactions as getTransactionsService,
  removeTransaction as removeTransactionService,
} from '../../services/transaction';

function* getTransactions(action: PayloadAction<Callbacks>) {

  const {
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    const { data } = yield call(getTransactionsService);
    yield put(transactionActions.setTransactions(data));

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* addTransaction(action: PayloadAction<Transaction & Callbacks>) {
  const {
    transactor,
    amount,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    yield call(addTransactionService, {
      transactor,
      amount,
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
}

export default transactionSaga;
