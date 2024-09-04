import { forwardRef } from 'react';
import {
  DatePickerInput as MantineDatePickerInput,
  DatePickerInputProps as MantineDatePickerInputProps,
} from '@mantine/dates';
import { useForm } from './form-provider';

export interface DatePickerInputProps
  extends Omit<MantineDatePickerInputProps, 'checked' | 'value' | 'error' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const DatePickerInput = forwardRef<HTMLButtonElement, DatePickerInputProps>(
  ({ name, ...props }, ref) => {
    const form = useForm();
    return <MantineDatePickerInput ref={ref} {...props} {...form.getInputProps(name)} />;
  }
);
