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
    firstName,
    lastName,
    phoneNumber,
    onPress,
    ...rest
  } = props;

  const fullName = `${firstName} ${lastName}`;

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
          userName={fullName}
        />
        <VStack>
          <Text
            style={styles.userName}
          >
            {fullName}
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
