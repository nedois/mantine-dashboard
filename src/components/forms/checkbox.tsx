import { forwardRef } from 'react';
import { Checkbox as MantineCheckbox, CheckboxProps as MantineCheckboxProps } from '@mantine/core';
import { useForm } from './form-provider';

export interface CheckboxProps
  extends Omit<MantineCheckboxProps, 'checked' | 'value' | 'error' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ name, ...props }, ref) => {
  const form = useForm();
  return (
    <MantineCheckbox
      ref={ref}
      key={form.key(name)}
      {...props}
      {...form.getInputProps(name, { type: 'checkbox' })}
    />
  );
});
