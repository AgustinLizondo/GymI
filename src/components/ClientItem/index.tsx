import React from 'react';

// UI
import {
  HStack, Pressable, Text, VStack,
} from 'native-base';

// Components
import Avatar from '../Avatar';

// Styles
import styles from './styles';

// Types
import { ClientItemProps } from './types';

const ClientItem = (props: ClientItemProps) => {

  const {
    name,
    phoneNumber,
    onPress,
    ...rest
  } = props;

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      {...rest}
    >
      <HStack
        alignItems="center"
        space={2}
      >
        <Avatar
          userName={name}
        />
        <VStack>
          <Text
            style={styles.userName}
          >
            {name}
          </Text>
          <Text
            style={styles.phoneNumber}
          >
            {phoneNumber || 'No phone number'}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default ClientItem;
