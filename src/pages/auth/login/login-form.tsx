import { NavLink } from 'react-router-dom';
import { Anchor, Button, Group, Stack, StackProps } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { LoginRequestSchema } from '@/api/dtos';
import { Checkbox } from '@/components/forms/checkbox';
import { FormProvider } from '@/components/forms/form-provider';
import { PasswordInput } from '@/components/forms/password-input';
import { TextInput } from '@/components/forms/text-input';
import { useAuth, useLogin } from '@/hooks';
import { paths } from '@/routes';
import { handleFormErrors } from '@/utilities/form';

interface LoginFormProps extends Omit<StackProps, 'children'> {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess, ...props }: LoginFormProps) {
  const { setIsAuthenticated } = useAuth();
  const { mutate: login, isPending } = useLogin();

  const form = useForm({
    mode: 'uncontrolled',
    validate: zodResolver(LoginRequestSchema),
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
          <Anchor size="sm" component={NavLink} to={paths.auth.forgotPassword}>
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
