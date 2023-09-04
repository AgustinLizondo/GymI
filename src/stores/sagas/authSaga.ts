import {
  takeEvery,
  call,
  // put,
} from 'redux-saga/effects';
import authActions from '../slices/authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { SignIn } from '../types/authTypes';
import { Callbacks } from '../types';
import {
  signIn as signInService,
  signOut as signOutService,
} from '../../services/auth';

function* signIn(action: PayloadAction<SignIn & Callbacks>) {

  const {
    email,
    password,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    yield call(signInService, {
      email,
      password,
    });

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* signOut(action: PayloadAction<Callbacks>) {

  const {
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    yield call(signOutService);

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* authSaga() {
  yield takeEvery(authActions.signIn, signIn);
  yield takeEvery(authActions.signOut, signOut);
}

export default authSaga;
