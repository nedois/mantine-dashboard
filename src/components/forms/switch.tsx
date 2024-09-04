import { forwardRef } from 'react';
import { Switch as MantineSwitch, SwitchProps as MantineSwitchProps } from '@mantine/core';
import { useForm } from './form-provider';

export interface SwitchProps
  extends Omit<MantineSwitchProps, 'checked' | 'value' | 'error' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ name, ...props }, ref) => {
  const form = useForm();
  return (
    <MantineSwitch
      ref={ref}
      key={form.key(name)}
      {...props}
      {...form.getInputProps(name, { type: 'checkbox' })}
    />
  );
});
