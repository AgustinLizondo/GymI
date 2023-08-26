import React from 'react';

// UI
import { SafeAreaView } from 'react-native';

// Styles
import styles from './styles';

// Types
import { MainBoxProps } from './types';

const MainBox = ({
  children,
  ...rest
}: MainBoxProps) => (
  <SafeAreaView
    style={styles.safeAreaView}
    { ...rest }
  >
    { children }
  </SafeAreaView>
);

export default MainBox;
