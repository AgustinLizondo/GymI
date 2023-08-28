import { IInputProps } from "native-base";
import { MutableRefObject } from "react";
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  RegisterOptions,
  UseFormStateReturn,
} from "react-hook-form";

export interface InputProps extends IInputProps {
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
  customRef?: MutableRefObject<any>;
  onSubmitEditing?: VoidFunction;
  defaultValue?: string;
  label?: string;
  placeholder: string;
  isInvalid?: boolean;
  secureTextEntry?: boolean;
  rightElement?: JSX.Element | JSX.Element[];
  mask?: string;
  containerProps?: object;
}

export interface RenderInputProps {
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<any>;
}
