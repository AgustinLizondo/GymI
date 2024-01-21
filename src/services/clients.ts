import 'react-native-url-polyfill/auto';
import supabase from "./supabase";
import { Client } from '../stores/types/clientTypes';

export const getClients = async (name: string) => await supabase
  .from('Client')
  .select()
  .ilike('client_name', `%${name}%`);

export const addClient = async (client: Omit<Client, "id">) => {
  await supabase
    .from('Client')
    .insert([{
      client_name: client.name,
      client_address: client.streetAddress,
      client_email: client.emailAddress,
      client_phone_number: client.phoneNumber,
      client_admission_date: new Date().toISOString(),
    }]);
};
