import React, { useState } from 'react';

// UI
import {
  FormControl,
  Input as InputNB,
  Pressable,
  Icon,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

// Components
import { Controller } from 'react-hook-form';

// Types
import { InputProps, RenderInputProps } from './types';

// Styles
import styles from './styles';

const InputController = (props: InputProps) => {

  const {
    control,
    name,
    rules,
    customRef,
    onSubmitEditing,
    label,
    placeholder,
    type,
    containerProps,
    leftElement,
    rightElement,
    keyboardType,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordInput = type === 'password';
  const iconName = showPassword ? 'eye' : 'eye-off';

  const onEyePress = (): void => {
    setShowPassword(!showPassword);
  };

  const secureTextEntryElement = (
    <Pressable
      onPress={onEyePress}
      paddingRight={5}
    >
      <Icon
        as={Feather}
        size={4}
        name={iconName}
        color="gray.400"
      />
    </Pressable>
  );

  const renderInput = ({
    field: {
      onChange,
      onBlur,
      value,
    },
    fieldState: {
      invalid,
      error,
    },
  }: RenderInputProps) => (
    <FormControl
      isInvalid={invalid}
      {...containerProps}
    >
      <FormControl.Label
        _text={styles.label}
      >
        {label}
      </FormControl.Label>
      <InputNB
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        ref={customRef}
        placeholder={placeholder}
        leftElement={leftElement}
        rightElement={isPasswordInput ? secureTextEntryElement : rightElement}
        secureTextEntry={isPasswordInput && !showPassword}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        type={type}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {error?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={renderInput}
    />
  );
};

export default InputController;
