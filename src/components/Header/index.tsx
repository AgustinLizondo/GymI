import React from 'react';

// UI
import {
  Text,
  HStack,
  Icon,
  Pressable,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

// Types
import { HeaderProps } from './types';

// Styles
import styles from './styles';

const Header = (props: HeaderProps) => {

  const {
    screenName,
    onOptionsPress,
    onBackPress,
  } = props;

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      marginY={4}
    >
      <Pressable
        onPress={onBackPress}
      >
        <Icon
          as={Feather}
          name="chevron-left"
          color="#090909"
          size={6}
        />
      </Pressable>
      <Text
        style={styles.screenName}
      >
        {screenName}
      </Text>
      <Pressable
        onPress={onOptionsPress}
      >
        <Icon
          as={Feather}
          name="more-vertical"
          color="#090909"
          size={6}
        />
      </Pressable>
    </HStack>
  );};

export default Header;
