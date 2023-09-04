import 'react-native-url-polyfill/auto';
import supabase from "./supabase";
import { SignIn } from '../stores/types/authTypes';

export const signIn = async (credentials: SignIn) => {
  const { data, error } = await supabase
    .auth
    .signInWithPassword(credentials);

  if (error) {
    throw error;
  }
  return data;
};

export const signOut = async () => {
  const { error } = await supabase
    .auth
    .signOut();

  if (error) {
    throw error;
  }
};
