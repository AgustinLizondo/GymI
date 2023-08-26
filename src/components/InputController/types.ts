import { IInputProps } from "native-base";
import { MutableRefObject } from "react";
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldError,
  RegisterOptions,
  UseFormStateReturn,
} from "react-hook-form";

type FieldValues = {
  [x: string]: string | undefined;
};

export interface InputProps extends IInputProps {
  control: Control<FieldValues>;
  name: string;
  rules?: RegisterOptions;
  customRef?: MutableRefObject<HTMLElement>;
  onSubmitEditing?: VoidFunction;
  defaultValue?: string;
  label: string;
  placeholder: string;
  errorMessage?: FieldError;
  isInvalid?: boolean;
  helperText?: string;
  secureTextEntry?: boolean;
  rightElement?: JSX.Element | JSX.Element[];
  mask?: string;
  containerProps?: object;
}

export interface RenderInputProps {
  field: ControllerRenderProps<FieldValues>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}
