import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  StackProps,
  TextInput,
} from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { routes } from '@/routes';

interface LoginFormProps extends Omit<StackProps, 'children'> {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess, ...props }: LoginFormProps) {
  return (
    <Stack {...props}>
      <TextInput label="Email" required />
      <PasswordInput label="Password" required />
      <Group justify="space-between">
        <Checkbox label="Remember me" />
        <Anchor size="sm" component={NavLink} to={routes.auth.forgotPassword}>
          Forgot password?
        </Anchor>
      </Group>
      <Button>Login</Button>
    </Stack>
  );
}
