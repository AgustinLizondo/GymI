import React from 'react';

// UI
import {
  HStack,
  Text,
  View,
} from 'native-base';

// Components
import Avatar from '../Avatar';

//Types
import { Transaction as TransactionType } from '../../stores/types/transactionTypes';

// Styles
import styles from './styles';

const Transaction = (props: TransactionType) => {

  const {
    clients: {
      firstName,
      lastName,
    },
    transactionAmount,
    createdAt,
  } = props;

  const fullName = `${firstName} ${lastName}`;
  const formattedAmount = transactionAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const date = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <HStack
      style={styles.transactionContainer}
      space={4}
    >
      <Avatar
        userName={fullName}
      />
      <View>
        <Text
          style={styles.transactionText}
        >
          {fullName}
        </Text>
        <Text
          style={styles.dateText}
        >
          {date}
        </Text>
      </View>
      <Text
        style={styles.amountText}
      >
        {formattedAmount}
      </Text>
    </HStack>
  );};

export default Transaction;
