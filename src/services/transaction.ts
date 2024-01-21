import 'react-native-url-polyfill/auto';
import supabase from '../services/supabase';
import { Transaction } from '../stores/types/transactionTypes';

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const startDate = new Date(currentYear, currentMonth - 1, 1);
const endDate = new Date(currentYear, currentMonth, 0);

export const getRevenue = async () => await supabase
  .from('Subscriptions')
  .select('*')
  .gte('created_at', startDate.toISOString())
  .lte('created_at', endDate.toISOString());

export const getTransactions = async () => await supabase
  .from('Subscriptions')
  .select(`
    created_at,
    transaction_amount,
    client_id,
      Client (
        first_name,
        last_name,
        phone_number
  )`)
  .gte('created_at', startDate.toISOString())
  .lte('created_at', endDate.toISOString())
  .range(0, 4);

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
