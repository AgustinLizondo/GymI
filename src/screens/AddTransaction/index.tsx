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
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';

// Utils
import { Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';

// State
import { useDispatch } from '../../stores/hooks';
import transactionActions from '../../stores/slices/transactionSlice';

// Types
import { AddTransactionProps } from './types';
import { Client } from '../../stores/types/clientTypes';

// Styles
import styles from './styles';

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
      client: '',
    },
  });

  const clientInputRef = useRef<HTMLInputElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const dispatch = useDispatch();
  const submitButtonDisabled = !isValid;

  const onBackPress = () => navigation.goBack();
  const onOptionsPress = () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.show();
    }
  };
  const onAmountInputSubmit = () => {
    if (clientInputRef.current) {
      clientInputRef.current.focus();
    }
  };

  const onClientInputFocus = () => {
    navigation.navigate('SearchClientsScreen', {
      onClientItemPress: (clientSelected: Client) => {
        setClientSelected(clientSelected);
        setValue('client', clientSelected.name);
        navigation.goBack();
        trigger('client');
        if (actionSheetRef.current) {
          actionSheetRef.current.show();
        }
      },
    });
    Keyboard.dismiss();
  };

  const onSaveButtonPress = () => {

    const successCallback = () => {
      if (actionSheetRef.current) {
        actionSheetRef.current.hide();
      }
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
        containerStyle={styles.actionSheet}
        ref={actionSheetRef}
        headerAlwaysVisible
      >
        <Button
          isDisabled={submitButtonDisabled}
          onPress={onSaveButtonPress}
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
              message: 'This field is required',
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
              message: 'This field is required',
            },
          }}
        />
      </VStack>
    </MainBox>
  );};

export default AddTransaction;
