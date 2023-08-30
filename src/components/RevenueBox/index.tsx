import React from 'react';

// UI
import {
  Text,
  VStack,
  HStack,
  Divider,
} from 'native-base';

// Styles
import styles from './styles';

// Types
import { RevenueBoxProps } from './types';

const RevenueBox = (props: RevenueBoxProps) => {

  const {
    grossRevenue = 0,
    chargedSubscriptions = 0,
    totalClients = 0,
    ...rest
  } = props;

  const formattedAmount = grossRevenue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <VStack
      style={styles.container}
      {...rest}
    >
      <Text
        style={styles.title}
      >
        Last week revenue
      </Text>
      <HStack>
        <VStack
          style={styles.innerContainer}
        >
          <Text
            style={styles.boldText}
          >
            {formattedAmount}
          </Text>
          <Text
            style={styles.text}
          >
            Gross revenue
          </Text>
        </VStack>
        <Divider
          orientation="vertical"
        />
        <VStack
          style={styles.innerContainer}
        >
          <Text
            style={styles.boldText}
          >
            {chargedSubscriptions}
          </Text>
          <Text
            style={styles.text}
          >
            Charged subscriptions
          </Text>
        </VStack>
        <Divider
          orientation="vertical"
        />
        <VStack
          style={styles.innerContainer}
        >
          <Text
            style={styles.boldText}
          >
            {totalClients}
          </Text>
          <Text
            style={styles.text}
          >
            Total clients
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default RevenueBox;
