import 'react-native-url-polyfill/auto';
import supabase from "./supabase";

export const getClients = async (name: string) => await supabase
  .from('clients')
  .select()
  .ilike('first_name', `%${name}%`);
