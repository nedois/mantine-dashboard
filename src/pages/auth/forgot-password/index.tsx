import { Stack, Text, Title } from '@mantine/core';
import { Page } from '@/components/page';
import { ForgotPasswordForm } from './forgot-password-form';

export default function ForgotPasswordPage() {
  return (
    <Page title="Forgot Password">
      <Stack gap="xl">
        <Stack>
          <Title order={2}>Forgot your password?</Title>
          <Text fz="sm" c="dimmed">
            Please enter the email address associated with your account and We will email you a link
            to reset your password.
          </Text>
        </Stack>

        <ForgotPasswordForm />
      </Stack>
    </Page>
  );
}
