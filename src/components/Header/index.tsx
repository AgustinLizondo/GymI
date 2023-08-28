import React from 'react';

// UI
import {
  Text,
  HStack,
  Icon,
  Pressable,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

// Components
import Avatar from '../Avatar';

// Types
import { HeaderProps } from './types';

// Styles
import styles from './styles';

const Header = (props: HeaderProps) => {

  const {
    screenName,
    userName,
    onAvatarPress,
    onOptionsPress,
    onBackPress,
  } = props;

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
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
      {!onOptionsPress && (
        <Avatar
          onPress={onAvatarPress}
          userName={userName}
        />
      )}
      {onOptionsPress && (
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
      )}
    </HStack>
  );};

export default Header;
