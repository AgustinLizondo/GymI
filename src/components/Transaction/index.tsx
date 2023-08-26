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
import { TransactionProps } from './types';

// Styles
import styles from './styles';

const Transaction = (props: TransactionProps) => {

  const {
    transaction:  {
      transactor,
      amount,
      date,
    },
  } = props;

  const formattedAmount = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <HStack
      style={styles.transactionContainer}
      space={4}
    >
      <Avatar
        userName={transactor}
      />
      <View>
        <Text
          style={styles.transactionText}
        >
          {transactor}
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
