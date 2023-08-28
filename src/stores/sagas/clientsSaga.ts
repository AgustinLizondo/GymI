import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import clientsActions from '../slices/clientsSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { getClients as getClientsService } from '../../services/clients';
import { Callbacks } from '../types';

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

function* clientsSaga() {
  yield takeEvery(clientsActions.getClients, getClients);
}

export default clientsSaga;
