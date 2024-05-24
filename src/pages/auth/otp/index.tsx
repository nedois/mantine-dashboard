import { Stack, Text, Title } from '@mantine/core';

import { Page } from '@/components/page';
import { OtpForm } from './otp-form';

export default function OtpPage() {
  return (
    <Page title="Otp">
      <Stack gap="xl">
        <Stack>
          <Title order={2}>Enter your OTP?</Title>
          <Text fz="sm" c="dimmed">
            We&apos;ve sent a 6-digit confirmation email to your email.
          </Text>
        </Stack>

        <OtpForm />
      </Stack>
    </Page>
  );
}
