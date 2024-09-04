import { forwardRef } from 'react';
import { MoneyInput as BaseInput, MoneyInputProps as BaseProps } from '../money-input';
import { useForm } from './form-provider';

export interface MoneyInputProps
  extends Omit<BaseProps, 'checked' | 'value' | 'error' | 'onFocus' | 'onBlur'> {
  name: string;
}

export const MoneyInput = forwardRef<HTMLInputElement, MoneyInputProps>(
  ({ name, ...props }, ref) => {
    const form = useForm();
    return <BaseInput ref={ref} key={form.key(name)} {...props} {...form.getInputProps(name)} />;
  }
);
