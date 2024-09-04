import { PiGoogleLogoDuotone as GoogleIcon, PiXLogoDuotone as XIcon } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { Anchor, Button, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { Page } from '@/components/page';
import { UnderlineShape } from '@/components/underline-shape';
import { paths } from '@/routes';
import { LoginForm } from './login-form';

export default function LoginPage() {
  return (
    <Page title="Login">
      <Stack gap="xl">
        <Stack>
          <Title order={2}>
            Welcome back! Please{' '}
            <Text fz="inherit" fw="inherit" component="span" pos="relative">
              Sign in
              <UnderlineShape
                c="blue"
                left="0"
                pos="absolute"
                h="0.625rem"
                bottom="-1rem"
                w="7rem"
              />
            </Text>{' '}
            to continue.
          </Title>
          <Text fz="sm" c="dimmed">
            By signing up, you will gain access to exclusive content, special offers, and be the
            first to hear about exciting news and updates.
          </Text>
        </Stack>

        <Group grow>
          <Button leftSection={<XIcon size="1rem" />} variant="outline" color="gray">
            Login with X
          </Button>
          <Button leftSection={<GoogleIcon size="1rem" />} variant="outline" color="gray">
            Login with Google
          </Button>
        </Group>

        <Divider label="OR" labelPosition="center" />

        <LoginForm />

        <Text fz="sm" c="dimmed">
          Don&apos;t have an account?{' '}
          <Anchor fz="inherit" component={NavLink} to={paths.auth.register}>
            Register
          </Anchor>
        </Text>
      </Stack>
    </Page>
  );
}
