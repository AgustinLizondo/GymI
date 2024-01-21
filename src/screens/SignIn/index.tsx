import React, { useRef } from 'react';

// UI
import {
  Button, Text, VStack,
} from 'native-base';

// Components
import MainBox from '../../components/MainBox';
import InputController from '../../components/InputController';

// State
import authActions from '../../stores/slices/authSlice';
import { useDispatch } from '../../stores/hooks';

// Utils
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../utils/regex';

// Types
// import { SignInProps } from './types';

// Styles
import styles from './styles';

const SignInScreen = () => {

  const {
    control,
    getValues,
    setError,
    formState: {
      isValid,
    },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();
  const passwordInputRef = useRef<HTMLInputElement>();
  const isSignInButtonDisabled = !isValid;

  const onEmailInputSubmitEditing = () => passwordInputRef.current?.focus();

  const onSignInButtonPress = () => {

    if (!isValid) return;

    const {
      email,
      password,
    } = getValues();

    const successCallback = () => {
      dispatch(
        authActions.setIsUserLogged(true),
      );
    };

    const errorCallback = (error: string) => {
      setError('password', {
        type: 'manual',
        message: error,
      });
    };

    dispatch(
      authActions.signIn({
        email,
        password,
        successCallback,
        errorCallback,
      }),
    );
  };

  return (
    <MainBox>
      <VStack
        flex={1}
        space={3}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          style={styles.boldText}
        >
          Hello Again!
        </Text>
        <Text
          style={styles.mediumText}
        >
          {`Welcome back, you've been missed!`}
        </Text>
      </VStack>
      <VStack
        flex={2}
        space={3}
      >
        <InputController
          control={control}
          placeholder="Email"
          name="email"
          keyboardType="email-address"
          onSubmitEditing={onEmailInputSubmitEditing}
          rules={{
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: emailRegex,
              message: 'Email is invalid',
            },
          }}
        />
        <InputController
          customRef={passwordInputRef}
          control={control}
          placeholder="Password"
          name="password"
          type="password"
          onSubmitEditing={onSignInButtonPress}
          rules={{
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
        />
        <Button
          isDisabled={isSignInButtonDisabled}
          onPress={onSignInButtonPress}
          marginTop={2}
        >
          Sign In
        </Button>
      </VStack>
    </MainBox>
  );
};

export default SignInScreen;
