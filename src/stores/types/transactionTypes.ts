export interface Transaction {
  transactor: number | string;
  amount: number | string;
  date?: string;
  companyId?: string;
}

export interface TransactionState {
  transactions: Transaction[] | [];
}
