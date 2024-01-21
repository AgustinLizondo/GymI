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
import RevenueBox from '../../components/RevenueBox';

// Types
import { HomeProps } from './types';
import { Transaction as TransactionType } from '../../stores/types/transactionTypes';

// State
import { useDispatch, useSelector } from '../../stores/hooks';
import transactionsActions from '../../stores/slices/transactionSlice';
import authActions from '../../stores/slices/authSlice';
// import clientsActions from '../../stores/slices/clientsSlice';

// Utils
import { apiDataFormatter } from '../../utils/api';
import { useIsFocused } from '@react-navigation/native';

// Styles
import styles from './styles';

const HomeScreen = ({ navigation }: HomeProps) => {

  const dispatch = useDispatch();
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const isFocused = useIsFocused();

  const {
    transactions,
    grossRevenue,
    chargedSubscriptions,
    totalClients,
  } = useSelector((state) => state.transactions);

  const onAddTransactionPress = () => {
    navigation.navigate('AddTransaction');
    if (actionSheetRef.current) {
      actionSheetRef.current.hide();
    }
  };

  const onSignOutPress = () => {
    const successCallback = () => dispatch(
      authActions.setIsUserLogged(false),
    );

    dispatch(authActions.signOut({
      successCallback,
    }));
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
    navigation.navigate('AddClient');
    if (actionSheetRef.current) {
      actionSheetRef.current.hide();
    }
  };

  useEffect(() => {
    dispatch(
      transactionsActions.getTransactions({}),
    );
    dispatch(
      transactionsActions.getRevenue({}),
    );
  }, [dispatch, isFocused]);

  const renderItem = (props: { item: TransactionType }) => (
    <Transaction
      {...props.item}
    />
  );

  return (
    <MainBox>
      <ActionSheet
        containerStyle={styles.actionSheet}
        ref={actionSheetRef}
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
        <Button
          padding={2}
          variant="link"
          onPress={onSignOutPress}
        >
          Sign out
        </Button>
      </ActionSheet>
      <Header
        screenName="Home"
        onOptionsPress={onOptionsPress}
      />
      <RevenueBox
        marginBottom={4}
        grossRevenue={grossRevenue}
        chargedSubscriptions={chargedSubscriptions}
        totalClients={totalClients}
      />
      <FlashList
        data={apiDataFormatter(transactions)}
        estimatedItemSize={100}
        renderItem={renderItem}
      />
    </MainBox>
  );
};

export default HomeScreen;
