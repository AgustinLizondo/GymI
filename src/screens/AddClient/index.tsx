import React, { useRef } from 'react';

// UI
import { Button } from 'native-base';
import InputController from '../../components/InputController';
import Header from '../../components/Header';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';

// Components
import MainBox from '../../components/MainBox';

// Types
import { AddClientProps } from './types';

// Utils
import { useForm } from 'react-hook-form';

// State
import { useDispatch } from '../../stores/hooks';
import clientActions from '../../stores/slices/clientsSlice';

// Styles
import styles from './styles';

const AddClient = ({ navigation }: AddClientProps) => {

  const dispatch = useDispatch();
  const addressInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const {
    control,
    reset,
    getValues,
    formState: {
      isValid,
    },
  } = useForm({
    defaultValues: {
      name: '',
      streetAddress: '',
      emailAddress: '',
      phoneNumber: '',
    },
  });

  const submitButtonDisabled = !isValid;
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const onBackPress = () => navigation.goBack();
  const onOptionsPress = () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.show();
    }
  };

  const onSaveButtonPress = () => {

    const {name, streetAddress, emailAddress, phoneNumber} = getValues();
    const successCallback = () => {
      if (actionSheetRef.current) {
        actionSheetRef.current.hide();
      }
      reset();
    };

    const errorCallback = () => {
      // Show error
    };

    console.log({
      name,
      streetAddress,
      emailAddress,
      phoneNumber,
      successCallback,
      errorCallback,
    });

    dispatch(clientActions.addClient({
      name,
      streetAddress,
      emailAddress,
      phoneNumber,
      successCallback,
      errorCallback,
    }));
  };

  const onFullNameSubmit = () => {
    if (addressInputRef.current) {
      addressInputRef.current.focus();
    }
  };

  const onAddressInputSubmit = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const onEmailInputSubmit = () => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  };

  const onPhoneInputSubmit = () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.show();
    }
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
          variant="link"
          onPress={onSaveButtonPress}
          padding={2}
        >
          Save
        </Button>
      </ActionSheet>
      <Header
        screenName="Add Client"
        onBackPress={onBackPress}
        onOptionsPress={onOptionsPress}
      />
      <InputController
        control={control}
        name="name"
        placeholder="Full name"
        rules={{
          required: {
            value: true,
            message: 'This field is required',
          },
        }}
        onSubmitEditing={onFullNameSubmit}
      />
      <InputController
        control={control}
        name="streetAddress"
        placeholder="Address"
        rules={{
          required: {
            value: true,
            message: 'This field is required',
          },
        }}
        customRef={addressInputRef}
        onSubmitEditing={onAddressInputSubmit}
      />
      <InputController
        control={control}
        name="emailAddress"
        placeholder="Email"
        rules={{
          required: {
            value: true,
            message: 'This field is required',
          },
        }}
        customRef={emailInputRef}
        onSubmitEditing={onEmailInputSubmit}
      />
      <InputController
        control={control}
        name="phoneNumber"
        placeholder="Phone Number"
        rules={{
          required: {
            value: true,
            message: 'This field is required',
          },
        }}
        customRef={phoneInputRef}
        onSubmitEditing={onPhoneInputSubmit}
      />
    </MainBox>
  );};

export default AddClient;
