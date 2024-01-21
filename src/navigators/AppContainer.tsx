import React from 'react';

// Navigators
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import LoggedNavigator from './LoggedNavigator';
import AuthNavigator from './AuthNavigator';

// UI
import { NativeBaseProvider, StatusBar } from 'native-base';

// State
import { useSelector } from '../stores/hooks';

// Theme
import theme from '../../src/theme';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#181818',
  },
};

const AppContainer = () => {
  const isUserLogged = useSelector((state) => state.auth.isUserLogged);

  return (
    <NativeBaseProvider
      theme={theme}
    >
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer
        theme={navTheme}
      >
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
