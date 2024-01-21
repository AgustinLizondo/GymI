import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import AddTransaction from '../screens/AddTransaction';
import SearchClientsScreen from '../screens/SearchClients';
import { Client } from '../stores/types/clientTypes';
import AddClient from '../screens/AddClient';

export type LoggedNavigatorParams = {
  HomeScreen: undefined;
  AddTransaction: {
    clientSelected?: Client;
  };
  SearchClientsScreen: {
    onClientItemPress: (client: Client) => void;
  };
  AddClient: undefined;
};

const Stack = createNativeStackNavigator<LoggedNavigatorParams>();

const LoggedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AddTransaction" component={AddTransaction}
      initialParams={{
        clientSelected: {} as Client,
      }}
      options={{
        gestureDirection: 'vertical',
      }}/>
    <Stack.Screen name="SearchClientsScreen" component={SearchClientsScreen}
      initialParams={{
        onClientItemPress: () => void 0,
      }}/>
    <Stack.Screen name="AddClient" component={AddClient}
      options={{
        gestureDirection: 'vertical',
      }}/>
  </Stack.Navigator>
);

export default LoggedNavigator;
