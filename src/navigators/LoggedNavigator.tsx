import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import AddTransaction from '../screens/AddTransaction';
import SearchClientsScreen from '../screens/SearchClients';

export type LoggedNavigatorParams = {
  HomeScreen: undefined;
  AddTransaction: {
    clientSelected?: string;
  };
  SearchClientsScreen: {
    onClientItemPress?: () => void;
  };
};

const Stack = createNativeStackNavigator<LoggedNavigatorParams>();

const LoggedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AddTransaction" component={AddTransaction} />
    <Stack.Screen name="SearchClientsScreen" component={SearchClientsScreen} />
  </Stack.Navigator>
);

export default LoggedNavigator;
