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

// Utils
import { MonthsEnum } from '../../utils/enum';

// Styles
import styles from './styles';

const Transaction = (props: TransactionType) => {

  const {
    clients: {
      name,
    },
    transactionAmount,
    createdAt,
  } = props;

  const formattedAmount = transactionAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const month = Number(createdAt.slice(5, 7)) - 1;
  const day = createdAt.slice(8, 10);

  const date = `${MonthsEnum[month]} ${day}`;

  return (
    <HStack
      style={styles.transactionContainer}
      space={4}
    >
      <Avatar
        userName={name}
      />
      <View>
        <Text
          style={styles.transactionText}
        >
          {name}
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
