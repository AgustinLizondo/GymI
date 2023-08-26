import React, {
  useCallback,
  useEffect,
} from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/stores';
import { PersistGate } from 'redux-persist/integration/react';
import * as SplashScren from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppContainer from './src/navigators/AppContainer';

SplashScren.preventAutoHideAsync();

const App: React.FC = () => {

  const [fontsLoaded, fontError] = useFonts({
    Regular: Montserrat_400Regular,
    Medium: Montserrat_500Medium,
    SemiBold: Montserrat_600SemiBold,
    Bold: Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScren.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, fontError, onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider
      store={store}
    >
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
