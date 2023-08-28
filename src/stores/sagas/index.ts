
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import transactionSaga from './transactionSaga';
import clientsSaga from './clientsSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    transactionSaga(),
    clientsSaga(),
  ]);
}
