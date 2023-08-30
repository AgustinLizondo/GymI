import { Client } from "./clientTypes";

export interface Transaction {
  id: string;
  clients: Client;
  transactionAmount: number | string;
  createdAt: string;
  companyId: string;
}

export interface TransactionState {
  transactions: Transaction[] | [];
}
