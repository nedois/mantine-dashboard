import { Button, Stack, StackProps, TextInput } from '@mantine/core';

interface ForgotPasswordFormProps extends Omit<StackProps, 'children'> {
  onSuccess?: () => void;
}

export function ForgotPasswordForm({ onSuccess, ...props }: ForgotPasswordFormProps) {
  return (
    <Stack {...props}>
      <TextInput label="Email" required />
      <Button>Send request</Button>
    </Stack>
  );
}
