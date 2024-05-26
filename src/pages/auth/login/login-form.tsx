import { Anchor, Button, Group, Stack, StackProps } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { useForm, zodResolver } from '@mantine/form';

import { routes } from '@/routes';
import { LoginBodySchema, useLogin } from '@/services/resources/auth';
import { useAuth } from '@/providers/auth-provider';
import { FormProvider } from '@/components/forms/form-provider';
import { TextInput } from '@/components/forms/text-input';
import { PasswordInput } from '@/components/forms/password-input';
import { Checkbox } from '@/components/forms/checkbox';
import { handleFormErrors } from '@/utilities/form';

interface LoginFormProps extends Omit<StackProps, 'children'> {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess, ...props }: LoginFormProps) {
  const { setIsAuthenticated } = useAuth();
  const { mutate: login, isPending } = useLogin();

  const form = useForm({
    mode: 'uncontrolled',
    validate: zodResolver(LoginBodySchema),
    initialValues: { email: 'john.doe@example.com', password: '123456789', remember: false },
  });

  const handleSubmit = form.onSubmit((variables) => {
    login(
      { variables },
      {
        onSuccess: () => setIsAuthenticated(true),
        onError: (error) => handleFormErrors(form, error),
      }
    );
  });

  return (
    <FormProvider form={form} onSubmit={handleSubmit}>
      <Stack {...props}>
        <TextInput name="email" label="Email" required />
        <PasswordInput name="password" label="Password" required />
        <Group justify="space-between">
          <Checkbox name="remember" label="Remember me" />
          <Anchor size="sm" component={NavLink} to={routes.auth.forgotPassword}>
            Forgot password?
          </Anchor>
        </Group>
        <Button type="submit" loading={isPending}>
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
}
