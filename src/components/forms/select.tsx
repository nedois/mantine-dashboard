import { forwardRef } from 'react';
import { Select as MantineSelect, SelectProps as MantineSelectProps } from '@mantine/core';
import { useForm } from './form-provider';

export interface SelectProps
  extends Omit<MantineSelectProps, 'checked' | 'value' | 'error' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(({ name, ...props }, ref) => {
  const form = useForm();
  return <MantineSelect ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />;
});
