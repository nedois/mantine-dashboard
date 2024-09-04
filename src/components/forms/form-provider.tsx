import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';
import { Box, BoxProps, ElementProps } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

type FormContextValues = UseFormReturnType<any>;

interface FormProviderProps<FormValues> extends BoxProps, ElementProps<'form', keyof BoxProps> {
  form: UseFormReturnType<FormValues>;
}

const FormContext = createContext<FormContextValues>({} as FormContextValues);

export function useForm() {
  const context = useContext(FormContext);
  invariant(context, 'useForm must be used within FormProvider');
  return context;
}

export function FormProvider<FormValues>({
  children,
  form,
  ...props
}: FormProviderProps<FormValues>) {
  return (
    <FormContext.Provider value={form}>
      <Box component="form" {...props}>
        {children}
      </Box>
    </FormContext.Provider>
  );
}
