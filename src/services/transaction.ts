import 'react-native-url-polyfill/auto';
import supabase from '../services/supabase';
import { Transaction } from '../stores/types/transactionTypes';

export const getTransactions = async () => await supabase
  .from('transactions')
  .select(`
  created_at,
  transaction_amount,
  client_id,
    clients (
      first_name,
      last_name,
      phone_number
    )
  `);

export const addTransaction = async (
  transaction: Pick<Transaction, 'clients' | 'transactionAmount'>,
) => {
  const {
    clients: {
      id: client_id,
    },
    transactionAmount: transaction_amount,
  } = transaction;

  const { data, error } = await supabase
    .from('transactions')
    .insert([
      {
        client_id,
        transaction_amount,
      },
    ])
    .select();
  return { data, error };
};

export const removeTransaction = async (id: number) => {
  const { error } = await supabase
    .from('transactions')
    .delete()
    .eq('id', id);
  return error;
};
