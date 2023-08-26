import React from 'react';
import LoggedNavigator from './LoggedNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import theme from '../../src/theme';

const AppContainer = () => {
  const isUserLogged = useSelector((state) => state.auth.isUserLogged); // type this to GlobalState

  return (
    <NativeBaseProvider
      theme={theme}
    >
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        {!isUserLogged ? (
          <LoggedNavigator />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default AppContainer;
