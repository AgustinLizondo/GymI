import React, {
  useEffect,
  useRef,
} from 'react';

// UI
import { Button } from 'native-base';
import { FlashList } from '@shopify/flash-list';

// Components
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Header from '../../components/Header';
import Transaction from '../../components/Transaction';
import MainBox from '../../components/MainBox';
// import RevenueBox from '../../components/RevenueBox';

// Types
import { HomeProps } from './types';
import { Transaction as TransactionType } from '../../stores/types/transactionTypes';

// Actions
import transactionsActions from '../../stores/slices/transactionSlice';
import clientsActions from '../../stores/slices/clientsSlice';

// Utils
import { apiDataFormatter } from '../../utils/api';

// State
import { GlobalState } from '../../stores/types';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import styles from './styles';

const HomeScreen = ({ navigation }: HomeProps) => {

  const dispatch = useDispatch();
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const {
    transactions,
  } = useSelector((state: GlobalState) => state.transactions);

  const onBackPress = () => navigation.goBack();
  const onAddTransactionPress = () => {
    navigation.navigate('AddTransaction');
    if (actionSheetRef.current) {
      actionSheetRef.current.hide();
    }
  };
  const onOptionsPress = () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.show();
    }
  };
  const onAddClientPress = () => {
    // navigation.navigate('AddClient');
    if (actionSheetRef.current) {
      actionSheetRef.current.hide();
    }
  };

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
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.actionSheet}
        headerAlwaysVisible
      >
        <Button
          padding={2}
          variant="link"
          onPress={onAddTransactionPress}
        >
          Add transaction
        </Button>
        <Button
          padding={2}
          variant="link"
          onPress={onAddClientPress}
        >
          Add client
        </Button>
      </ActionSheet>
      <Header
        screenName="Home"
        onBackPress={onBackPress}
        onOptionsPress={onOptionsPress}
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
