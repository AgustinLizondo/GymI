import React, {
  useRef,
  useState,
} from 'react';

// UI
import {
  Icon,
  Button,
  VStack,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

// Components
import MainBox from '../../components/MainBox';
import Header from '../../components/Header';
import InputController from '../../components/InputController';
import ActionSheet from 'react-native-actions-sheet';

// Utils
import { Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

// Actions
import transactionActions from '../../stores/slices/transactionSlice';

// Types
import { AddTransactionProps } from './types';
import { Client } from '../../stores/types/clientTypes';

// Styles
import styles from '../Home/styles';

const AddTransaction = (props: AddTransactionProps) => {

  const {
    navigation,
    route,
  } = props;

  const [clientSelected, setClientSelected] = useState<Client>(route.params?.clientSelected);

  const {
    control,
    reset,
    getValues,
    formState: {
      isValid,
    },
    trigger,
    setValue,
  } = useForm({
    mode: 'all',
    defaultValues: {
      amount: '',
      client: clientSelected || '',
    },
  });

  const clientInputRef = useRef(null);
  const amountInputRef = useRef(null);
  const actionSheetRef = useRef(null);
  const dispatch = useDispatch();
  const submitButtonDisabled = !isValid;

  const onBackPress = () => navigation.goBack();
  const onOptionsPress = () => actionSheetRef.current.show();
  const onAmountInputSubmit = () => clientInputRef.current.focus();

  const onClientInputFocus = () => {
    navigation.navigate('SearchClientsScreen', {
      onClientItemPress: (clientSelected: Client) => {
        setClientSelected(clientSelected);
        setValue('client', `${clientSelected.firstName} ${clientSelected.lastName}`);
        navigation.goBack();
        trigger('client');
        actionSheetRef.current.show();
      },
    });
    Keyboard.dismiss();
  };

  const onContinueButtonPress = () => {

    const successCallback = () => {
      actionSheetRef.current.hide();
      reset();
    };

    const errorCallback = () => {
      // Show error
    };

    dispatch(transactionActions.addTransaction({
      transactionAmount: getValues('amount'),
      clients: clientSelected,
      successCallback,
      errorCallback,
    }));
  };

  return (
    <MainBox>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.actionSheet}
        headerAlwaysVisible
      >
        <Button
          isDisabled={submitButtonDisabled}
          onPress={onContinueButtonPress}
          variant="link"
          padding={2}
        >
          Save
        </Button>
      </ActionSheet>
      <Header
        onBackPress={onBackPress}
        screenName="Add Transaction"
        onOptionsPress={onOptionsPress}
      />
      <VStack
        marginY={4}
        space={2}
      >
        <InputController
          control={control}
          name="amount"
          label="Amount"
          placeholder="Amount"
          customRef={amountInputRef}
          keyboardType="numeric"
          onSubmitEditing={onAmountInputSubmit}
          rules={{
            required: {
              value: true,
              message: 'El campo es requerido',
            },
          }}
        />
        <InputController
          onFocus={onClientInputFocus}
          leftElement={<Icon
            marginLeft={2}
            as={Feather}
            size={6}
            name="users"
            color="gray.400"
          />}
          control={control}
          name="client"
          label="Client"
          placeholder="Client"
          customRef={clientInputRef}
          rules={{
            required: {
              value: true,
              message: 'El campo es requerido',
            },
          }}
        />
      </VStack>
    </MainBox>
  );};

export default AddTransaction;
