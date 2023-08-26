import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';

export type LoggedNavigatorParams = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<LoggedNavigatorParams>();

const LoggedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

export default LoggedNavigator;
