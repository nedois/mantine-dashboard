import { forwardRef } from 'react';
import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from '@mantine/core';
import { useForm } from './form-provider';

export interface TextInputProps
  extends Omit<MantineTextInputProps, 'checked' | 'value' | 'error' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ name, ...props }, ref) => {
  const form = useForm();
  return (
    <MantineTextInput ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />
  );
});
