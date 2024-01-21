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
import { formatClientsData } from '../../utils/formatters';

function* getClients(action: PayloadAction<{name: string} & Callbacks>) {

  const {
    name,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    const { data } = yield call(getClientsService, name);
    const formattedData = formatClientsData(data);
    yield put(clientsActions.setClients(formattedData));

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  }
}

function* addClient(action: PayloadAction<Omit<Client, 'id'> & Callbacks>) {
  const {
    name,
    phoneNumber,
    streetAddress,
    emailAddress,
    successCallback = () => null,
    errorCallback = () => null,
  } = action.payload;

  try {
    yield call(addClientService, {
      name,
      streetAddress,
      emailAddress,
      phoneNumber,
    });

    yield call(successCallback);
  } catch (error) {
    yield call(errorCallback);
  }
}

function* clientsSaga() {
  yield takeEvery(clientsActions.getClients, getClients);
  yield takeEvery(clientsActions.addClient, addClient);
}

export default clientsSaga;
