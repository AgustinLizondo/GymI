import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import clientsActions from '../slices/clientsSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  getClients as getClientsService,
  addClient as addClientService,
} from '../../services/clients';
import { Callbacks } from '../types';
import { Client } from '../types/clientTypes';

function* getClients(action: PayloadAction<{name: string} & Callbacks>) {

  const {
    name,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    const { data } = yield call(getClientsService, name);
    yield put(clientsActions.setClients(data));

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* addClient(action: PayloadAction<Omit<Client, 'id'> & Callbacks>) {
  const {
    firstName,
    lastName,
    phoneNumber,
    streetAddress,
    emailAddress,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    // yield put(commonsActions.setIsLoading(true));

    yield call(addClientService, {
      firstName,
      lastName,
      phoneNumber,
      streetAddress,
      emailAddress,
    });

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  } finally {
    // yield put(commonsActions.setIsLoading(false));
  }
}

function* clientsSaga() {
  yield takeEvery(clientsActions.getClients, getClients);
  yield takeEvery(clientsActions.addClient, addClient);
}

export default clientsSaga;
