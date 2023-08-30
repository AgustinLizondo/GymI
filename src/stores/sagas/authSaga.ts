import {
  takeEvery,
  call,
  // put,
} from 'redux-saga/effects';
import authActions from '../slices/authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { LogIn } from '../types/authTypes';
import { Callbacks } from '../types';

function* logIn(action: PayloadAction<LogIn & Callbacks>) {

  const {
    // email,
    // password,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));
    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* authSaga() {
  yield takeEvery(authActions.logIn, logIn);
}

export default authSaga;
