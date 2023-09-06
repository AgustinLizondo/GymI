import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignIn';

export type AuthNavigatorParams = {
  SignInScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SignInScreen" component={SignInScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
