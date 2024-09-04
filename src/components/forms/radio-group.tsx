import { forwardRef } from 'react';
import { RadioGroupProps as MantineRadioGroupProps, Radio } from '@mantine/core';
import { useForm } from './form-provider';

export interface RadioGroupProps extends Omit<MantineRadioGroupProps, 'value' | 'onChange'> {
  name: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ name, ...props }, ref) => {
  const form = useForm();
  return <Radio.Group ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />;
});
