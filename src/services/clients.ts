import 'react-native-url-polyfill/auto';
import supabase from "./supabase";
import { Client } from '../stores/types/clientTypes';

export const getClients = async (name: string) => await supabase
  .from('clients')
  .select()
  .ilike('first_name', `%${name}%`);

export const addClient = async (client: Omit<Client, "id">) => await supabase
  .from('clients')
  .insert([{
    first_name: client.firstName,
    last_name: client.lastName,
    phone_number: client.phoneNumber,
    email_address: client.emailAddress,
    street_address: client.streetAddress,
  }]);
