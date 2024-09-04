import { forwardRef } from 'react';
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core';
import { useForm } from './form-provider';

export interface PasswordInputProps
  extends Omit<MantinePasswordInputProps, 'checked' | 'value' | 'error' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ name, ...props }, ref) => {
    const form = useForm();
    return (
      <MantinePasswordInput
        ref={ref}
        key={form.key(name)}
        {...props}
        {...form.getInputProps(name)}
      />
    );
  }
);
