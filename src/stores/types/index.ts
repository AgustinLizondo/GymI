import { AuthState } from "./authTypes";
import { ClientsState } from "./clientTypes";
import { TransactionState } from "./transactionTypes";

export interface Callbacks {
  successCallback?: () => void;
  errorCallback?: () => void;
}

export interface GlobalState {
  auth: AuthState;
  transactions: TransactionState;
  clients: ClientsState
}
