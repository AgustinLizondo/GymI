import 'react-native-url-polyfill/auto';
import supabase from '../services/supabase';
import { Transaction } from '../stores/types/transactionTypes';

export const getTransactions = async () => await supabase
  .from('transactions')
  .select('*');

export const addTransaction = async (transaction: Transaction) => {
  const {
    transactor: transactor_name,
    amount: transaction_amount,
  } = transaction;

  const { data, error } = await supabase
    .from('transactions')
    .insert([
      {
        transactor_name,
        transaction_amount,
        // company_id: userToken,
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
