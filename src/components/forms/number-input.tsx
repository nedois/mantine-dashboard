import { forwardRef } from 'react';
import {
  NumberInput as MantineNumberInput,
  NumberInputProps as MantineNumberInputProps,
} from '@mantine/core';
import { useForm } from './form-provider';

export interface NumberInputProps
  extends Omit<MantineNumberInputProps, 'checked' | 'value' | 'errpr' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ name, ...props }, ref) => {
    const form = useForm();
    return (
      <MantineNumberInput ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />
    );
  }
);
