import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './slices/authSlice';
import { transactionReducer } from './slices/transactionSlice';
import { clientReducer } from './slices/clientsSlice';
import rootSaga from './sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saga = createSagaMiddleware();

const persistConfig = {
  key: 'GymI',
  storage: AsyncStorage,
  whitelist: [
    'auth',
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionReducer,
  clients: clientReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
saga.run(rootSaga);

setupListeners(store.dispatch);
