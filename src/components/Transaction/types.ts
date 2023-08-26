export interface Transaction {
  transactor: string;
  amount: number | string;
  date: string;
}

export interface TransactionProps {
  transaction: Transaction;
}
