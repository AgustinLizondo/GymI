import React, { useRef } from 'react';

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

// Utils
import { Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';

// Types
import { AddTransactionProps } from './types';
import { Client } from '../../stores/types/clientTypes';

const AddTransaction = (props: AddTransactionProps) => {

  const {
    navigation,
    route,
  } = props;

  const clientSelected = route.params?.clientSelected;

  const {
    control,
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

  const clientInputRef = useRef();
  const amountInputRef = useRef();

  const submitButtonDisabled = !isValid;

  const onBackPress = () => {
    navigation.goBack();
  };

  const onAmountInputSubmit = () => clientInputRef.current.focus();

  const onClientInputFocus = () => {
    navigation.navigate('SearchClientsScreen', {
      onClientItemPress: (clientSelected: Client) => {
        setValue('client', `${clientSelected.firstName} ${clientSelected.lastName}`);
        navigation.goBack();
        trigger('client');
      },
    });
    Keyboard.dismiss();
  };

  return (
    <MainBox>
      <Header
        onBackPress={onBackPress}
        screenName="Add Transaction"
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
      <Button
        marginTop="auto"
        isDisabled={submitButtonDisabled}
      >
        Continue
      </Button>
    </MainBox>
  );};

export default AddTransaction;
