import React, { useEffect } from 'react';

// UI
// import { View, Text } from 'native-base';
import { FlashList } from '@shopify/flash-list';

// Components
import Header from '../../components/Header';
import Transaction from '../../components/Transaction';
import MainBox from '../../components/MainBox';
import RevenueBox from '../../components/RevenueBox';

// Types
import { HomeProps } from './types';
import { Transaction as TransactionType } from '../../stores/types/transactionTypes';

// Actions
import transactionsActions from '../../stores/slices/transactionSlice';

// Utils
import { apiDataFormatter } from '../../utils/api';

// State
import { GlobalState } from '../../stores/types';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }: HomeProps) => {

  const dispatch = useDispatch();
  const {
    transactions,
  } = useSelector((state: GlobalState) => state.transactions);

  const onBackPress = () => navigation.goBack();

  useEffect(() => {
    dispatch(transactionsActions.getTransactions({}));
  }, [dispatch]);

  const renderItem = (props: { item: TransactionType }) => (
    <Transaction
      {...props.item}
    />
  );

  return (
    <MainBox>
      <Header
        screenName="Home"
        onBackPress={onBackPress}
      />
      {/* <RevenueBox
        marginBottom={4}
      /> */}
      <FlashList
        data={apiDataFormatter(transactions)}
        estimatedItemSize={100}
        renderItem={renderItem}
      />
    </MainBox>
  );
};

export default HomeScreen;
