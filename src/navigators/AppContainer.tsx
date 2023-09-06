import React from 'react';
import LoggedNavigator from './LoggedNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import theme from '../../src/theme';
import { GlobalState } from '../stores/types';

const AppContainer = () => {
  const isUserLogged = useSelector((state: GlobalState) => state.auth.isUserLogged);

  return (
    <NativeBaseProvider
      theme={theme}
    >
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        {isUserLogged ? (
          <LoggedNavigator />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default AppContainer;
